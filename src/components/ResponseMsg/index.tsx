import { FC, useState } from "react";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ResponseMsgProps {
  type: "error" | "success" | "warning";
  message: string;
  autoHideDuration?: number;
}

const ResponseMsg: FC<ResponseMsgProps> = ({
  type,
  message,
  autoHideDuration = 3000,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert
        severity={type}
        sx={{ width: "100%" }}
        action={
          !autoHideDuration && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ResponseMsg;
