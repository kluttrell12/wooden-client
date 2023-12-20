import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginBuilder } from "../../managers/AuthManager";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
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
      <Typography
        sx={{
          fontFamily: theme.typography.fontFamily.main,
          fontSize: theme.typography.fontSizes.large,
          color: theme.palette.primary.main,
        }}
        variant="h6"
      >
        Please sign in
      </Typography>
      <FormControl
        onSubmit={handleLogin}
        component="form"
        sx={{ width: "100%" }}
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
          margin="normal"
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
          Submit
        </Button>
        <Button
          sx={{ mt: 2, backgroundColor: theme.palette.secondary.alternate }}
          component={Link}
          to="/register"
          color="secondary"
          fullWidth
        >
          Cancel
        </Button>
        {isUnsuccessful && (
          <Typography color="error" sx={{ mt: 2 }}>
            Username or password not valid
          </Typography>
        )}
        <Link to="/register">Not a member, join the club!</Link>
      </FormControl>
    </Box>
  );
};
