import { create } from "zustand";
import { Client } from "./ws";

export const useClientStore = create<{
  client?: Client;
  init: (ip: string, onStateChange: (state: boolean) => void) => void;
  connected: boolean
  setConnected: (state: boolean) => void;
}>((set) => ({
  client: undefined,
  init: (ip, onStateChange) => set({ client: new Client(ip, onStateChange) }),
  connected: false,
  setConnected: state => set({connected: state})
}));
