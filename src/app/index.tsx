import { Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { DashboardLayout } from "@pages/app/layout";
import { css } from "@styled-system/css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<DashboardLayout />} />
      </Routes>

      <div
        className={css({
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          textAlign: 'right',
          px: '4',
          fontFamily: 'mono',
          fontSize: 'xs',
          color: "slate.800",
        })}
      >
        {__APP_VERSION__}
      </div>
    </>
  );
}

export default App;
