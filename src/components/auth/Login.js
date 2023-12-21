import { useRef, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { loginBuilder } from "../../managers/AuthManager";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";

const theme = WoodenTheme;

export const Login = ({ setToken, setUserId, setStaffBool }) => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [isUnsuccessful, setIsUnsuccessful] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
    };

    loginBuilder(user).then((res) => {
      if ("valid" in res && res.valid) {
        setToken(res.token);
        setUserId(res.user_id);
        setStaffBool(res.is_staff);
        navigate("/projects");
      } else {
        setIsUnsuccessful(true);
      }
    });
  };

  return (
    <Box>
      <FormControl
        onSubmit={handleLogin}
        component="form"
        sx={{ width: "100%", maxWidth: 500 }}
      >
        <TextField
          sx={{
            fontFamily: theme.typography.fontFamily.main,
            fontSize: theme.typography.fontSizes.large,
            color: theme.palette.primary.main,
          }}
          label="Username"
          variant="outlined"
          fullWidth
          inputRef={username}
          required
        />
        <TextField
          sx={{
            fontFamily: theme.typography.fontFamily.main,
            fontSize: theme.typography.fontSizes.large,
            color: theme.palette.primary.main,
          }}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          inputRef={password}
          required
        />
        <Button
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </Button>
        {/* <Button
          sx={{
            mt: 2,
            backgroundColor: theme.palette.secondary.alternate,
            "&:hover": {
              color: "common.white",
              backgroundColor: 'secondary.main' // Assuming you have this color in your theme
            },
          }}
          component={Link}
          to="/register"
          fullWidth
        >
          Cancel
        </Button> */}
        {isUnsuccessful && (
          <Typography color="error" sx={{ mt: 2 }}>
            Username or password not valid
          </Typography>
        )}

        <Link
          component={RouterLink}
          to="/register"
          sx={{
            textDecoration: "none",
            color: "inherit",
            marginTop: 2,
            "&:hover": {
              color: "primary.alternate", // Assuming you have this color in your theme
            },
          }}
        >
          Not a member, join the club!
        </Link>
      </FormControl>
    </Box>
  );
};
