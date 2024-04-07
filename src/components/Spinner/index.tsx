import { FC } from "react";

import { Box, CircularProgress } from "@mui/material";

interface Props {
  local?: boolean;
  style?: React.CSSProperties;
}

const Spinner: FC<Props> = ({ style = {}, local = false }) => {
  if (local) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        style={style}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
