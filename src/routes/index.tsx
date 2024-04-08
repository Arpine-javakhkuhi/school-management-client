import { FC, useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "../components/Routes/ProtectedRoutes";
import UnprotectedRoutes from "../components/Routes/UnProtectedRoutes";
import Spinner from "../components/Spinner";
import storage from "../storage/Storage";
import Login from "../components/Login";
import Teachers from "../pages/Teachers";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="teachers" element={<Teachers />} />
    </Route>

    <Route element={<UnprotectedRoutes />}>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);

const AppRouterProvider: FC = () => {
  const [loading, setLoading] = useState(true);
  const accessToken = storage.get("accessToken");

  console.log("accessToken route", accessToken);

  // useEffect(() => {
  //   if (accessToken) {
  //     // find current user
  //     // } else {
  //     setLoading(false);
  //   }
  // }, [accessToken]);

  // if (loading) {
  //   return <Spinner />;
  // }

  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
