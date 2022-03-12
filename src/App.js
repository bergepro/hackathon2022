import React, { useState } from "react";
// Project files
import { getAds } from "./firebase";
import Navbar from "./Containers/Navbar";
import Main from "./Containers/Main";
import Rentals from "./Containers/Rentals";
// Mui/react
import { Route, Routes } from "react-router";
import { ThemeProvider, createTheme, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="Main" element={<Main />} />

        <Route path="rentals" element={<Rentals />} />
      </Routes>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <DarkModeIcon />
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
