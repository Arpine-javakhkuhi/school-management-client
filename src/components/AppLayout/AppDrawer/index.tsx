import { FC } from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";

import { menuItems } from "./constants";
import AppNavLink from "../../AppNavLink";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AppDrawer: FC<Props> = ({ open }) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ sx: { overflowX: "hidden" } }}
    >
      <Toolbar />

      <Stack justifyContent="space-between" sx={{ height: "100%" }}>
        <Box>
          <Divider />
          <List component="nav" disablePadding>
            {menuItems.map(({ icon: IconComponent, ...menu }) => (
              <Tooltip
                key={menu.id}
                disableHoverListener={open}
                title={menu.title}
                placement={"right"}
                arrow
              >
                <ListItem disablePadding>
                  <ListItemButton component={AppNavLink} to={menu.to}>
                    <ListItemIcon>{<IconComponent />}</ListItemIcon>

                    <ListItemText primary={menu.title} />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default AppDrawer;
