import React, { useState, useRef } from "react";
// Project files
import Navbar from "./Containers/Navbar";
import Main from "./Containers/Main";
import Rentals from "./Containers/Rentals";
import Login from "./Containers/Login";
import Signup from "./Containers/Components/Signup";
// Mui/react
import { Route, Routes } from "react-router";
import { ThemeProvider, createTheme, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunIcon from "@mui/icons-material/WbSunny";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} />
      <Routes>
        <Route path="Main" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="rentals" element={<Rentals />} />
      </Routes>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          right: 85,
          top: 25,
        }}
      >
        <Button
          onClick={() => {
            setDarkMode(!darkMode);
            console.log(darkMode);
          }}
        >
          {!darkMode ? (
            <DarkModeIcon sx={{ color: "#3333dd" }} />
          ) : (
            <SunIcon sx={{ color: "yellow" }} />
          )}
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
