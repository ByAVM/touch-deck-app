import { create } from "zustand";
import { Client } from "./client";

export const useClientStore = create<{
  client?: Client;
  init: (ip: string) => void;
  connected: boolean
}>((set) => ({
  client: undefined,
  init: (ip) => set({ client: new Client(ip, (state) => set({connected: state})) }),
  connected: false,
}));
