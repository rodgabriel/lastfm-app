import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// css classes
import {
  wrapper,
  main,
  cardSection,
  cardContainer,
  searchSection,
} from "./styles.module.scss";

// components
import Card from "../../components/Card";
import FormSearch from "../../components/FormSearch";

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
      setTopArtists(data);
    }

    getTopArtists();
  }, []);

  return (
    <div className={wrapper}>
      <main className={main}>
        <section className={searchSection}>
          <FormSearch />
        </section>
        <section className={cardSection}>
          <h1>Top 10 Artistas no Brasil</h1>
          <div className={cardContainer}>
            {topArtists &&
              topArtists.map((artist, index) => {
                return <Card artist={artist} position={index} />;
              })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
