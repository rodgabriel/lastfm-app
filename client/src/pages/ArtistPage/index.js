import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// css
import {
  container,
  artistHeader,
  artistHeaderName,
  artistTags,
  bioSection,
  artistContent,
  otherSection,
} from "./styles.module.scss";

// component
import Tag from "../../components/Tag";

// actions
import buscarArtistData from "../../actions/buscarArtistData";

const Index = ({ match }) => {
  const { artist, loading, error, message } = useSelector(
    (state) => state.artistData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarArtistData(match.params.artist));
  }, [match, dispatch]);

  return (
    <div className={container}>
      {artist ? (
        <>
          <div className={artistHeader}>
            <div className={artistHeaderName}>
              <h1>{artist.name}</h1>
              <a target="_blank" rel="noreferrer" href={artist.url}>
                <i className="fas fa-play-circle"></i>
              </a>
            </div>
            <div className={artistTags}>
              <Tag
                text={`${Number(artist.stats.listeners).toLocaleString(
                  "pt-BR"
                )} ouvintes`}
              />
              <Tag
                text={`${Number(artist.stats.playcount).toLocaleString(
                  "pt-BR"
                )} reproduções`}
              />
            </div>
            <div className={artistTags}>
              {artist.tags.tag.map((tag) => (
                <Tag text={tag.name} link={tag.url} />
              ))}
            </div>
          </div>
          <div className={artistContent}>
            <div className={bioSection}>
              <h3>Biografia</h3>
              <p>{artist.bio.summary.split("<")[0]}</p>
            </div>
            <div className={otherSection}>
              <h3>Artistas relacionados</h3>
              {artist.similar.artist.map((artist) => (
                <Tag text={artist.name} link={`/artist=${artist.name}`} />
              ))}
            </div>
          </div>
        </>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        error && <h1>{message}</h1>
      )}
    </div>
  );
};

export default Index;
