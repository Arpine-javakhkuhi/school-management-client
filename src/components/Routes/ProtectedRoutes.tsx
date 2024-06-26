import { FC } from "react";

import { Navigate } from "react-router-dom";

import AppLayout from "../AppLayout";
import { AppRoute } from "../../types/enums";
import storage from "../../storage/Storage";

const ProtectedRoutes: FC = () => {
  const accessToken = storage.get("accessToken");

  if (!accessToken) {
    return <Navigate to={AppRoute.Login} />;
  }

  return <AppLayout />;
};

export default ProtectedRoutes;
