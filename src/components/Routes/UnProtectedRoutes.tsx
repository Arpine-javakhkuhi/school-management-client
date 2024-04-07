import { FC } from "react";

import { Navigate, Outlet } from "react-router-dom";
import storage from "../../storage/Storage";

const UnprotectedRoutes: FC = () => {
  const accessToken = storage.get("accessToken");

  const user = null;

  if (user && accessToken) {
    return <Navigate to={"/teachers"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default UnprotectedRoutes;
