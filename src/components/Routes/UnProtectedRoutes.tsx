import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import storage from "../../storage/Storage";
import { AppRoute } from "../../types/enums";

// import ResponseMsg from "../ResponseMsg";

const UnprotectedRoutes: FC = () => {
  const accessToken = storage.get("accessToken");
  // console.log("accessToken UnprotectedRoutes", accessToken);

  // const user = null;

  // if (user && accessToken) {
  if (accessToken) {
    return <Navigate to={AppRoute.Teachers} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default UnprotectedRoutes;
