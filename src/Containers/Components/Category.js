import Box from "@mui/material/Box";

function Category(props) {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        margin: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <>{props.icon}</> <>{props.title}</>
    </Box>
  );
}

export default Category;
