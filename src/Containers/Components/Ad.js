import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function AdImage(props) {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        boxShadow: "inset 0px -10px 20px 10px rgba(0,0,0,0.9)",
      }}
    >
      <img
        width="240px"
        height="200px"
        style={{
          borderRadius: "10px",
          marginBottom: "-24px",
          zIndex: "-200",
        }}
        src={props.img}
        alt={props.title}
      />
      <Typography position="relative" color="white">
        {props.price},- /{props.duration}
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
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AdImage
        price={props.price}
        duration={props.duration}
        img={props.img}
      ></AdImage>
      <AdTitle title={props.title}> </AdTitle>
    </Box>
  );
}
export { Ad };
