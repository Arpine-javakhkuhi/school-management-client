import storage from "../../storage/Storage";
import { AppRoute } from "../../types/enums";

export const logout = () => {
  storage.remove("accessToken");
  window.location.href = `${window.location.origin}${AppRoute.Login}`;
};
