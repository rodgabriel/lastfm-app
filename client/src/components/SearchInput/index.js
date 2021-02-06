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
  const { userData } = useSelector((state) => state.userLogin);
  const userId = userData ? userData._id : "000";

  const [searchTerm, setSearchTerm] = useState({ artist: "", album: "" });

  const onSearchArtistEnter = (e) => {
    if (e.keyCode === 13) {
      searchArtist();
    }
  };

  const onSearchAlbumEnter = (e) => {
    if (e.keyCode === 13) {
      searchAlbum();
    }
  };

  const searchArtist = () => {
    if (searchTerm.artist !== "") {
      // certificar de que album está vazio
      buscarPor === "artist" &&
        setSearchTerm((state) => ({ ...state, album: "" }));
      // salva pesquisa e redireciona para a página do artista
      dispatch(salvarHistoricoPesquisa(searchTerm, userId));
      history.push(`/artist=${searchTerm.artist}`);
    }
  };

  const searchAlbum = () => {
    if (searchTerm.artist !== "" && searchTerm.album !== "") {
      // salva pesquisa e redireciona para a página do album
      dispatch(salvarHistoricoPesquisa(searchTerm, userId));
      history.push(`/artist=${searchTerm.artist}/album=${searchTerm.album}`);
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
            buscarPor === "artist" ? onSearchArtistEnter(e) : onNextInput(e)
          }
        />
        {buscarPor !== "album" && (
          <button onClick={searchArtist} className={searchIcon}>
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
            onKeyDown={(e) => onSearchAlbumEnter(e)}
          />
          <button onClick={searchAlbum} className={searchIcon}>
            <i className="fas fa-search"></i>
          </button>
        </label>
      )}
    </>
  );
};

export default Index;
