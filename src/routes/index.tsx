import { FC } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoutes from "../components/Routes/ProtectedRoutes";
import UnprotectedRoutes from "../components/Routes/UnProtectedRoutes";
import Login from "../components/Login";
import Teachers from "../pages/Teachers";
import Subjects from "../pages/Subjects";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="teachers" element={<Teachers />} />
      <Route path="subjects" element={<Subjects />} />
    </Route>

    <Route element={<UnprotectedRoutes />}>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);

const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
