import { JwtPayload, jwtDecode } from "jwt-decode";

import { logout } from "./logout";

export const checkToken = (token: string) => {
  if (token) {
    const decodedToken = jwtDecode<JwtPayload>(token);
    console.log("Decoded Token", decodedToken);
    const currentDate = new Date();

  
    const isExpired =
      decodedToken?.exp && decodedToken.exp * 1000 < currentDate.getTime();

    if (isExpired) {
      logout();
    } else {
      return true;
    }
  }
  return false;
};
