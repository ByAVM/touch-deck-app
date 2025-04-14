import { FC } from "react";
import { ClientProvider } from "../../modules/ClientProvider";
import { Outlet } from "react-router";
import { ToasterProvider } from "../../modules/Toaster/provider";

export const DashboardLayout: FC = () => {
  return (
    <ToasterProvider>
      <ClientProvider>
        <Outlet />
      </ClientProvider>
    </ToasterProvider>
  );
};
