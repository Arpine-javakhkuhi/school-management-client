import { FC } from "react";

import { Navigate } from "react-router-dom";

import AppLayout from "../AppLayout";
import { AppRoute } from "../../types/enums";
import storage from "../../storage/Storage";
import ResponseMsg from "../ResponseMsg";

const ProtectedRoutes: FC = () => {
  const accessToken = storage.get("accessToken");

  const user = null;

  if (user === null || !accessToken) {
    return <Navigate to={AppRoute.Login} />;
  }

  return <AppLayout />;
};

export default ProtectedRoutes;
