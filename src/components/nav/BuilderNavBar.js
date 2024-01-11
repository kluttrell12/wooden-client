import {  useContext, useState } from "react";
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
import { AuthContext } from "../auth/authProvider";
// import MenuIcon from "@mui/icons-material/Menu";


export const BuilderNavBar = () => {
  const { token, setToken } = useContext(AuthContext)
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
        >
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
          ) : (
            <>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
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
                  onClick={() => {
                    setToken("");
                    navigate("/login");
                  }}
                >
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/register">
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
};
