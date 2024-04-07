import { FC } from "react";

import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { AppRoute } from "../../types/enums";

interface Props {
  target?: string;
}

const NotFound: FC<Props> = ({ target }) => {
  const navigate = useNavigate();

  return (
    <Stack
      alignItems="center"
      height="100vh"
      spacing={3}
      pt="9rem"
      sx={{ backgroundColor: "#f8f9fa" }}
    >
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h4">{target || "Page"} not found!</Typography>
      {!target || window.history.length === 1 ? (
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate(AppRoute.Teachers)}
        >
          Home Page
        </Button>
      ) : (
        <Button variant="contained" size="large" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      )}
    </Stack>
  );
};

export default NotFound;
