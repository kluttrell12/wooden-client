import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerBuilder } from "../../managers/AuthManager";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";

const theme = WoodenTheme;

export const Register = ({ setToken, setUserId, setStaffBool }) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const bio = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        bio: bio.current.value,
      };

      registerBuilder(newUser).then((res) => {
        if ("valid" in res && res.valid) {
          setToken(res.token);
          setUserId(res.user_id);
          setStaffBool(res.is_staff);
          navigate("/");
        }
      });
    } else {
      console.log("wrong");
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: '20px 0px'
      }}
    >
      <Box
        sx={{
          color: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily.main,
          maxWidth: 500,
          width: "100%",
        }}
      >
        <Typography mb={2}>Create an account</Typography>
        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="First Name" fullWidth inputRef={firstName} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last Name" fullWidth inputRef={lastName} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Username" fullWidth inputRef={username} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                inputRef={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                inputRef={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Verify Password"
                type="password"
                fullWidth
                inputRef={verifyPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bio"
                multiline
                rows={4}
                fullWidth
                inputRef={bio}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" component={Link} to="/" fullWidth>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
