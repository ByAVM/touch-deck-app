import { usePanelsStore } from "../model/store";

export const usePanelsList = () => {
  const isInitialized = usePanelsStore((state) => state.isListLoaded);
  const init = usePanelsStore((state) => state.loadList);
  const list = usePanelsStore((state) => state.panelsList);

  if (!isInitialized) {
    init();
  }

  return list;
};
