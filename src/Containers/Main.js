import Feed from "./Feed";
import Search from "./Search";
import Categories from "./Categories";
import Footer from "./Footer";

import Container from "@mui/material/Container";
const Main = () => {
  return (
    <Container maxWidth="lg">
      <Search />
      <Categories />
      <Feed />
      <Footer />
    </Container>
  );
};

export default Main;
