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

const index = () => {
  return (
    <div className={searchContainer}>
      <div className={searchContainerHeader}>
        <h2>Pesquise</h2>
        <ChooseSearch />
      </div>
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
