import { Typography, Box } from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";
import { Login } from "../auth/Login";

const theme = WoodenTheme

export const WelcomePage = () => {
    return (
      <Box display='flex' flexDirection="column" textAlign='center' mt={6} fontFamily={theme.typography.fontFamily.main} color="primary.main" backgroundColor={theme.palette.common.white}>
        <Typography fontSize={theme.typography.fontSizes.xxLarge}>Welcome to Wooden!</Typography>
        <Typography mb={6} fontSize={theme.typography.fontSizes.large}>An online community for word working enthusiasts</Typography>
        <Login />
      </Box>
    );
  };