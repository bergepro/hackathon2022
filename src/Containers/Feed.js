import { Ad } from "./Components/Ad";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Button";
const Feed = () => {
  const [adList, setAdList] = useState([]);
  useEffect(() => {
    async function getAds(db) {
      const adsCol = collection(db, "ads");
      const adsSnapshot = await getDocs(adsCol);
      const adsList = adsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAdList(adsList);
    }
    getAds(db);
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {adList.map((ad) => (
        <Box key={ad.id}>
          <Ad
            title={ad.title}
            price={ad.price}
            img={ad.img}
            duration={ad.duration}
          />
        </Box>
      ))}
    </Container>
  );
};
export default Feed;
