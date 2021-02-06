import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import { labelStyle, searchIcon, inputStyle } from "./styles.module.scss";

// actions
import { getData } from "../../actions/getData";

const Index = ({ placeholder, search }) => {
  const dispatch = useDispatch();
  const buscarPor = useSelector((state) => state.buscarPor);

  const [searchTerm, setSearchTerm] = useState({ artist: "", album: "" });

  const onSearchTerm = (e) => {
    if (e.keyCode === 13) {
      buscarPor === "artist" &&
        setSearchTerm((state) => ({ ...state, album: "" }));
      dispatch(getData(searchTerm, buscarPor));
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
            buscarPor === "artist" ? onSearchTerm(e) : onNextInput(e)
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
            onKeyDown={(e) => onSearchTerm(e)}
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
