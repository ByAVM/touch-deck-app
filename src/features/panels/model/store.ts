import { create } from "zustand";
import { loadPanelsList } from "../api/loadPanelsList";
import { Panel, PanelsListItem } from "../lib/types";

interface PanelsStore {
    isListLoaded: boolean;
    panelsList: PanelsListItem[]
    loadList: () => Promise<void>,
    currentPanel: null | Panel,
    setCurrentPanel: (panel: Panel | null) => void
}

export const usePanelsStore = create<PanelsStore>((set) => ({
    isListLoaded: false,
    panelsList: [],
    loadList: async () => {
        set({isListLoaded: true})
        const list = await loadPanelsList()
        set({panelsList: list})
    },
    currentPanel: null,
    setCurrentPanel: panel => set({currentPanel: panel})
}))