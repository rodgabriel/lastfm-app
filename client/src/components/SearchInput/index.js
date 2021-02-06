import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// styles
import { labelStyle, searchIcon, inputStyle } from "./styles.module.scss";

// actions
import salvarHistoricoPesquisa from "../../actions/salvarHistoricoPesquisa";

const Index = ({ placeholder, search }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const buscarPor = useSelector((state) => state.buscarPor);

  const [searchTerm, setSearchTerm] = useState({ artist: "", album: "" });

  const onSearchArtist = (e) => {
    if (searchTerm.artist !== "") {
      if (e.keyCode === 13) {
        buscarPor === "artist" &&
          setSearchTerm((state) => ({ ...state, album: "" }));
        dispatch(salvarHistoricoPesquisa(searchTerm));
        history.push(`/artist=${searchTerm.artist}`);
      }
    }
  };

  const onSearchAlbum = (e) => {
    if (e.keyCode === 13) {
      dispatch(salvarHistoricoPesquisa(searchTerm));
      history.push(`/artist=${searchTerm.artist}/album=${searchTerm.artist}`);
    }
  };

  const albumInput = useRef(null);

  const onNextInput = (e) => {
    if (e.keyCode === 13) {
      albumInput.current.focus();
    }
  };

  return (
    <>
      <label className={labelStyle}>
        <input
          type="text"
          placeholder="Nome do artista"
          className={inputStyle}
          value={searchTerm.artist}
          onChange={(e) =>
            setSearchTerm((state) => ({ ...state, artist: e.target.value }))
          }
          onKeyDown={(e) =>
            buscarPor === "artist" ? onSearchArtist(e) : onNextInput(e)
          }
        />
        {buscarPor !== "album" && (
          <button className={searchIcon}>
            <i className="fas fa-search"></i>
          </button>
        )}
      </label>
      {buscarPor === "album" && (
        <label className={labelStyle}>
          <input
            ref={albumInput}
            type="text"
            placeholder="Nome do álbum"
            className={inputStyle}
            value={searchTerm.album}
            onChange={(e) =>
              setSearchTerm((state) => ({ ...state, album: e.target.value }))
            }
            onKeyDown={(e) => onSearchAlbum(e)}
          />
          <button className={searchIcon}>
            <i className="fas fa-search"></i>
          </button>
        </label>
      )}
    </>
  );
};

export default Index;
