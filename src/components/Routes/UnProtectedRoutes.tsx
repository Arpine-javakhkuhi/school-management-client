import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import storage from "../../storage/Storage";
import { AppRoute } from "../../types/enums";

const UnprotectedRoutes: FC = () => {
  const accessToken = storage.get("accessToken");
  if (accessToken) {
    return <Navigate to={AppRoute.Teachers} />;
  }

  return <Outlet />;
};

export default UnprotectedRoutes;
