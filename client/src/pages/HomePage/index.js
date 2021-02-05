import { useState, useEffect } from "react";
import axios from "axios";

// css classes
import {
  wrapper,
  navbar,
  userSection,
  userImg,
  logBtn,
} from "./styles.module.scss";

const HomePage = () => {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    async function getTopArtists() {
      const { data } = await axios.post("http://localhost:5000/top", {
        params: {
          method: "geo.gettopartists",
          country: "brazil",
        },
      });
      setTopArtists(data["topartists"]["artist"]);
    }

    getTopArtists();
  }, []);

  console.log(topArtists);
  return (
    <div className={wrapper}>
      <nav className={navbar}>
        <strong>LAST.FM SEARCHER</strong>
        <div className={userSection}>
          <div className={userImg}>USER</div>
          <div className={logBtn}>SIGN IN | OUT</div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
