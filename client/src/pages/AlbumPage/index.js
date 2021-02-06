import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// actions
import buscarAlbumData from "../../actions/buscarAlbumData";

// css
import {
  container,
  albumHeader,
  albumHeaderName,
  albumHeaderArtist,
  albumTags,
  albumContent,
  albumTracks,
  albumInfo,
  trackInfo,
  trackNumber,
  flexJustifyBetween,
} from "./styles.module.scss";

// component
import Tag from "../../components/Tag";

const Index = ({ match }) => {
  const dispatch = useDispatch();
  const { album, loading, error, message } = useSelector(
    (state) => state.albumData
  );

  useEffect(() => {
    dispatch(buscarAlbumData(match.params.artist, match.params.album));
  }, [match, dispatch]);

  const padWithZero = (n) => {
    return n.split("").length === 1 ? "0" + n : n;
  };

  return (
    <div className={container}>
      {album && !error ? (
        <>
          <div className={albumHeader}>
            <div className={albumHeaderName}>
              <h1>{album.name}</h1>

              <a target="_blank" rel="noreferrer" href={album.url}>
                <i className="fas fa-play-circle"></i>
              </a>
            </div>
            <div className={albumHeaderArtist}>
              <i className="fas fa-microphone"></i>
              <Link to={`/artist=${album.artist}`}>
                <h2>{album.artist}</h2>
              </Link>
            </div>
            <div className={albumTags}>
              <Tag
                text={`${Number(album.listeners).toLocaleString(
                  "pt-BR"
                )} ouvintes`}
              />
              <Tag
                text={`${Number(album.playcount).toLocaleString(
                  "pt-BR"
                )} reproduções`}
              />
            </div>
            <div className={albumTags}>
              {album.tags.tag.map((tag) => (
                <Tag text={tag.name} link={tag.url} />
              ))}
            </div>
          </div>
          <div className={albumContent}>
            <div className={albumTracks}>
              <h3>Faixas:</h3>
              {album.tracks.track.map((track, index) => (
                <div className={trackInfo}>
                  <p className={trackNumber}>
                    {padWithZero(String(index + 1))} &#8212;{" "}
                  </p>
                  <div className={flexJustifyBetween}>
                    <p> {track.name}</p>
                    <p>
                      {Math.floor(track.duration / 60)}:
                      {padWithZero(
                        String(
                          track.duration - Math.floor(track.duration / 60) * 60
                        )
                      )}
                      <a target="_blank" rel="noreferrer" href={track.url}>
                        <i className="fas fa-play-circle"></i>
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={albumInfo}>
              <h3>Sobre o álbum</h3>
              <p>{album.wiki && album.wiki.summary.split("<")[0]}</p>
            </div>
          </div>
        </>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        error && <h1>{error && message}</h1>
      )}
    </div>
  );
};

export default Index;
