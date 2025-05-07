import { FC } from "react";
import { ClientProvider } from "@features/client/ui/ClientProvider";
import { ToasterProvider } from "@features/toaster/ui/ToasterProvider";
import { PanelsProvider } from "@features/panels/ui/PanelsProvider";
import { Dashboard } from ".";

export const DashboardLayout: FC = () => {
  return (
    <ToasterProvider>
      <ClientProvider>
        <PanelsProvider>
          <Dashboard />
        </PanelsProvider>
      </ClientProvider>
    </ToasterProvider>
  );
};
