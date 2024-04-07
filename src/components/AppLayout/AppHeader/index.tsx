import { FC } from "react";

import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import schoolLogo from "../../../assets/images/logo.png";
import { AppRoute } from "../../../types/enums";

interface Props {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<Props>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppHeader: FC<Props> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen?.(!open);
  };

  return (
    <AppBar position="absolute" open={open} elevation={0}>
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            mr: 4,
          }}
        >
          {!open ? <MenuIcon /> : <MenuOpenIcon />}
        </IconButton>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src={schoolLogo}
            sx={{
              width: 200,
              height: 31,
              cursor: "pointer",
            }}
            onClick={() => navigate(AppRoute.Teachers)}
          />
        </Box>
      </Toolbar>

      <Divider />
    </AppBar>
  );
};

export default AppHeader;
