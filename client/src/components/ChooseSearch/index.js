import { useDispatch, useSelector } from "react-redux";

// styles
import {
  inputContainer,
  inputCheck,
  inputLabel,
  active,
} from "./styles.module.scss";

// actions
import {
  selecionarBuscaPorAlbum,
  selecionarBuscaPorArtist,
} from "../../actions/selecionarMetodoBusca";

const Index = () => {
  const dispatch = useDispatch();
  const buscarPor = useSelector((state) => state.buscarPor);

  return (
    <div className={inputContainer}>
      <>
        <label
          className={`${inputLabel} ${buscarPor === "artist" ? active : ""}`}
          htmlFor="Artista"
        >
          <p>Artista</p>
        </label>
        <input
          className={inputCheck}
          data-cy="Artista"
          id="Artista"
          type="radio"
          name="artist"
          checked={buscarPor === "artist" ? true : false}
          onChange={() => dispatch(selecionarBuscaPorArtist)}
        ></input>
      </>
      <>
        <label
          className={`${inputLabel} ${buscarPor === "album" ? active : ""}`}
          htmlFor="Album"
        >
          <p>Álbum</p>
        </label>
        <input
          className={inputCheck}
          data-cy="Album"
          id="Album"
          type="radio"
          name="album"
          checked={buscarPor === "album" ? true : false}
          onChange={() => dispatch(selecionarBuscaPorAlbum)}
        ></input>
      </>
    </div>
  );
};

export default Index;
