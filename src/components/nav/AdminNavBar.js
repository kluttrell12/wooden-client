import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import ForestIcon from "@mui/icons-material/Forest";
import WoodenTheme from "../../themes/WoodenTheme";
import { AuthContext } from "../auth/authProvider";

const theme = WoodenTheme;

export const AdminNavBar = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    const isKeyNavigation =
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift");

    if (isKeyNavigation) return;

    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: theme.palette.primary.main,
                fontFamily: theme.typography.fontFamily.main,
                fontSize: theme.typography.fontSizes.xLarge,
              }}
            >
              Wooden
            </Typography>
            <ForestIcon sx={{ color: theme.palette.primary.main }} />
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu sx={{color: theme.palette.primary.main}}  />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        sx={{
          fontFamily: theme.typography.fontFamily.main,
          fontSize: theme.typography.fontSizes.xLarge,
        }}
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/projects">
              <ListItemText primary="Projects" sx={{color: theme.palette.primary.main}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/projects/create">
              <ListItemText primary="Add a Project" sx={{color: theme.palette.primary.main}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              color="inherit"
              onClick={() => {
                setToken("");
                navigate("/login");
              }}
            >
              <ListItemText primary="Logout" sx={{color: theme.palette.primary.main}} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};
