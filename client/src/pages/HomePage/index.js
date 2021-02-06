import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import buscarTopArtists from "../../actions/buscarTopArtists";

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
  const dispatch = useDispatch();
  const topArtists = useSelector((state) => state.topArtists);

  useEffect(() => {
    dispatch(buscarTopArtists());
  }, [dispatch]);

  return (
    <div className={wrapper}>
      <main className={main}>
        <section className={searchSection}>
          <FormSearch />
        </section>
        <section className={cardSection}>
          <h1>Top 10 Artistas no Brasil</h1>
          <div className={cardContainer}>
            {topArtists && topArtists.error ? (
              <h1>
                Desculpe, não podemos mostrar os Top 10 Artistas no momento...
              </h1>
            ) : (
              topArtists.map((artist, index) => {
                return (
                  <Card key={artist.name} artist={artist} position={index} />
                );
              })
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
