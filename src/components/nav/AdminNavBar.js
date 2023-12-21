import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";

const theme = WoodenTheme;

export const AdminNavBar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
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
        ></IconButton>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.primary.main, // Assuming these values are defined in your theme
            fontFamily: theme.typography.fontFamily.main,
            fontSize: theme.typography.fontSizes.xLarge,
          }}
        >
          Wooden
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {token ? (
            <>
              <Button color="inherit" component={Link} to="/projects">
                Projects
              </Button>
              <Button color="inherit" component={Link} to="/projects/create">
                Add a Project
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  setToken("");
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </>
          ) : null}
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {
            token ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/projects">
                    <ListItemText primary="Projects" />
                  </ListItemButton>
                </ListItem>
                {/* ... other ListItem and ListItemButton components for each link */}
              </>
            ) : null // No items if no token
          }
        </List>
      </Drawer>
    </AppBar>
  );
};
