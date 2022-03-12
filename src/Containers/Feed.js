import { Ad } from "./Components/Ad";
import Box from "@mui/material/Box";
import ducati from "../assets/imgs/ducati.jpg";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Feed = () => {
  const [adList, setAdList] = useState([]);
  async function getAds(db) {
    const adsCol = collection(db, "ads");
    const adsSnapshot = await getDocs(adsCol);
    const adsList = adsSnapshot.docs.map((doc) => doc.data());
    console.log(adsList);
    setAdList(adsList);
  }
  useEffect(() => {
    setAdList(getAds(db));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => {
          console.log(adList[0].price);
        }}
      >
        asd
      </Button>

      <Ad title="Ducati Panigale v4" price="2500/Day" img={ducati} />
      <Ad title="Ducati Panigale v4" price="2500/Day" img={ducati} />
      <Ad title="Ducati Panigale v4" price="2500/Day" img={ducati} />
      <Ad title="Ducati Panigale v4" price="2500/Day" img={ducati} />
      <Ad title="Ducati Panigale v4" price="2500/Day" img={ducati} />
      <Ad title="Ducati Panigale v4" price="2500/Day" img={ducati} />
    </Box>
  );
};

export default Feed;
