import { FC, useState } from "react";
import { AlertInfo } from "./types";
import ResponseMsg from "../ResponseMsg";

interface ErrorHandlerProps {
  children: any;
}
const ErrorHandler: FC<ErrorHandlerProps> = ({ children }) => {
  const [alert, setAlert] = useState<AlertInfo | null>(null);

  return (
    <>
      {alert && (
        <ResponseMsg
          message={alert.message}
          type={alert.type}
          setAlert={setAlert}
        />
      )}
      {children(setAlert)}
    </>
  );
};

export default ErrorHandler;
