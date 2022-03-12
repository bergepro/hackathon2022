import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function AdImage(props) {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: 240,
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        boxShadow: "inset 0px -10px 20px 10px rgba(0,0,0,0.9)",
      }}
    >
      <img
        width="100%"
        margin="200px"
        height="100%"
        style={{
          borderRadius: "10px",
          marginBottom: "-24px",
          zIndex: "-200",
        }}
        src={props.img}
        alt={props.title}
      />
      <Typography position="relative" color="white">
        {props.price}
      </Typography>
    </Box>
  );
}
function AdTitle(props) {
  return (
    <Box>
      <Typography>{props.title}</Typography>
    </Box>
  );
}

function Ad(props) {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AdImage price={props.price} img={props.img}></AdImage>
      <AdTitle title={props.title}> </AdTitle>
    </Box>
  );
}
export { Ad };
