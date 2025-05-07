// export const ws = new WebSocket('wss://192.168.1.54/ws')

import { toaster } from "@features/toaster/model/toaster";
import { AppCommand } from "../lib/types";
import { clientModelMessages } from "./messages";

const IS_DEBUG = import.meta.env.VITE_DEBUG === "1";
const WS_ENDPOINT = "/ws";
const RECONNECT_DELAY = 1000;

export class Client {
  ws: WebSocket | undefined;
  reconnectDelay = RECONNECT_DELAY;

  constructor(
    private ip: string,
    private onStateChange: (state: boolean) => void
  ) {
    if (IS_DEBUG) {
      onStateChange(true);
    } else {
      this._connect();
    }
  }

  private _connect() {
    toaster.create({
      title: clientModelMessages.connectionStart,
      duration: 2000
    });
    this.ws = new WebSocket(`wss://${this.ip}${WS_ENDPOINT}`);

    this.ws.onopen = () => {
      console.log("[WebSocket] Соединение установлено");
      this.onStateChange(true);
      this.reconnectDelay = RECONNECT_DELAY; // сбросить задержку при успехе
      toaster.success({
        title: clientModelMessages.connectionDone,
        duration: 2000
      });
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("[WebSocket] Ответ от сервера:", data);
        // тут можно обрабатывать команды от сервера
      } catch {
        console.warn(
          "[WebSocket] Не удалось распарсить сообщение:",
          event.data
        );
      }
    };

    this.ws.onerror = (err) => {
      console.error("[WebSocket] Ошибка:", err);
      toaster.error({
        title: clientModelMessages.error,
        description: JSON.stringify(err, null, 2),
        duration: 3000
      });
    };

    this.ws.onclose = (event) => {
      this.onStateChange(false);
      console.warn(
        `[WebSocket] Соединение закрыто (${event.code}). Повтор через ${this.reconnectDelay / 1000} мс`
      );
      toaster.warning({
        duration: this.reconnectDelay,
        title: {...clientModelMessages.connectionClosed, values: {delay: this.reconnectDelay / 1000}}
      })
      setTimeout(() => {
        this.reconnectDelay = Math.min(this.reconnectDelay * 2, 30000); // экспоненциальная задержка, максимум 30 сек
        this._connect();
      }, this.reconnectDelay);
    };
  }

  isConnected() {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  sendCommand(command: AppCommand) {
    if (IS_DEBUG) {
      console.log(`Send: ${JSON.stringify(command)}`);
      return;
    }

    if (this.isConnected()) {
      this.ws!.send(JSON.stringify(command));
    } else {
      console.warn(
        "[WebSocket] Соединение не открыто. Команда не отправлена:",
        command
      );
    }
  }
}
