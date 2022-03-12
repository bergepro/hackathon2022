import Category from "./Components/Category";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Piano from "@mui/icons-material/Piano";
import MC from "@mui/icons-material/TwoWheeler";
function Categories() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Category title="Cars" icon={<DirectionsCarIcon fontSize="large" />} />
      <Category title="Motorcycles" icon={<MC fontSize="large" />} />
      <Category title="Instruments" icon={<Piano fontSize="large" />} />
      <Category title="Cars" icon={<DirectionsCarIcon fontSize="large" />} />
      <Category title="Cars" icon={<DirectionsCarIcon fontSize="large" />} />
      <Category title="Cars" icon={<DirectionsCarIcon fontSize="large" />} />
    </Box>
  );
}

export default Categories;
