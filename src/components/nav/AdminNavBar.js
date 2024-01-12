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
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import WoodenTheme from "../../themes/WoodenTheme";
import { AuthContext } from "../auth/authProvider";

const theme = WoodenTheme;

export const AdminNavBar = () => {
  const { token, setToken } = useContext(AuthContext);
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
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <Menu
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          />
        </IconButton>
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
      </Toolbar>
      <Drawer
        sx={{
          color: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily.main,
          fontSize: theme.typography.fontSizes.xLarge,
        }}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {token ? (
            <>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/projects">
                  <ListItemText primary="Projects" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/projects/create">
                  <ListItemText primary="Add a Project" />
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
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : null}
        </List>
      </Drawer>
    </AppBar>
  );
};
