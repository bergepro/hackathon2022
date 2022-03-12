import React, { useRef } from "react";
import google from "../../assets/imgs/google.png";
import logo from "../../assets/imgs/logo.png";
import { Button, Container, Box } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
    })
    .catch((error) => {});
};
function Signup() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <img src={logo} alt="logo" style={{ width: "70px" }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I haven't read the terms and conditions."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Button fullWidth sx={{ mt: 3, mb: 2 }} onClick={signIn}>
          <img src={google} alt="Google sign-in button" width="220px" />
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default Signup;
