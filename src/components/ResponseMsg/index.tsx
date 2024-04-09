import { FC, useState } from "react";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { AlertInfo } from "../ErrorHandler/types";

interface ResponseMsgProps {
  type: "error" | "success" | "warning";
  message: string;
  autoHideDuration?: number;
  setAlert: (alert: AlertInfo | null) => void;
}

const ResponseMsg: FC<ResponseMsgProps> = ({
  type,
  message,
  autoHideDuration = 3000,
  setAlert,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setAlert(null);
    setIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ResponseMsg;
