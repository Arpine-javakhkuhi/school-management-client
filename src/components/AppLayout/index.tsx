import { FC, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import AppContent from "./AppContent";
import AppDrawer from "./AppDrawer";
import AppHeader from "./AppHeader";

const DashboardContent: FC<{ onlyDrawer?: boolean }> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppHeader open={open} setOpen={setOpen} />
      <AppDrawer open={open} setOpen={setOpen} />
      <AppContent />
    </Box>
  );
};

export default function Dashboard() {
  return <DashboardContent />;
}
