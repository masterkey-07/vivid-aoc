import { Outlet } from "react-router-dom";

export const BasicLayout = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "20%",
        width: "80%",
        height: "100%",
      }}
    >
      <Outlet />
    </div>
  );
};
