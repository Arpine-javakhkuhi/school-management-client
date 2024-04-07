import { FC } from "react";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const AppContent: FC = () => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
      backgroundColor: "#f8f9fa",
    }}
  >
    <Toolbar />

    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Outlet />
    </Container>
  </Box>
);

export default AppContent;
