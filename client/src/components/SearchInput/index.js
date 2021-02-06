import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import {
  searchContainer,
  labelStyle,
  searchIcon,
  inputStyle,
  searchContainerHeader,
} from "./styles.module.scss";

// component
import ChooseSearch from "../ChooseSearch";

// actions
import { getArtistData } from "../../actions/getArtistData";
import { getAlbumData } from "../../actions/getAlbumData";

const Index = ({ header, placeholder, search }) => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = (e) => {
    if (e.keyCode === 13) {
      dispatch(getArtistData(searchTerm));
    }
  };
  return (
    <div className={searchContainer}>
      {header && (
        <div className={searchContainerHeader}>
          <h2>Pesquise:</h2>
          <ChooseSearch />
        </div>
      )}
      <br />
      <label className={labelStyle}>
        <input
          type="text"
          placeholder={placeholder}
          id="search-bar"
          className={inputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => search && onSearchTerm(e)}
        />
        {search && (
          <button className={searchIcon}>
            <i className="fas fa-search"></i>
          </button>
        )}
      </label>
    </div>
  );
};

export default Index;
