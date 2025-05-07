import { useCallback } from "react";
import { usePanelsStore } from "../model/store";
import { loadPanel as loadPanelData } from "../api/loadPanel";
import { useNavigate } from "react-router";

export const usePanel = () => {
  const currentPanel = usePanelsStore((state) => state.currentPanel);
  const setCurrentPanel = usePanelsStore((state) => state.setCurrentPanel);

  const navigate = useNavigate();

  const loadPanel = useCallback(async (path?: string) => {
    if (path) {
      try {
        const panelData = await loadPanelData(path);
        setCurrentPanel(panelData);
      } catch {
        navigate("/app");
      }
    } else {
      setCurrentPanel(null)
    }
  }, [navigate, setCurrentPanel]);

  return { currentPanel, loadPanel };
};
