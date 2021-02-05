// styles
import {
  searchContainer,
  labelStyle,
  searchIcon,
  inputStyle,
} from "./styles.module.scss";

import SearchIcon from "../../static/assets/search-icon.svg";

const index = () => {
  return (
    <div className={searchContainer}>
      <h1>Pesquise</h1>
      <br />
      <br />
      <label className={labelStyle}>
        <input type="text" id="search-bar" className={inputStyle} />
        <button className={searchIcon}>
          <i className="fas fa-search"></i>
        </button>
      </label>
    </div>
  );
};

export default index;
