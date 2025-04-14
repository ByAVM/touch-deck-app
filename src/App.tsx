import { Route, Routes } from "react-router";
import { Home } from "./views/Home";
import { DashboardLayout } from "./views/Dashboard/layout";
import { Dashboard } from "./views/Dashboard";
import { css } from "@styled-system/css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>

      <div
        className={css({
          position: "absolute",
          left: 0,
          bottom: 0,
          fontFamily: 'mono',
          fontSize: 'xs',
          color: "slate.800"
        })}
      >
        0.0.1-pre-alpha
      </div>
    </>
  );
}

export default App;
