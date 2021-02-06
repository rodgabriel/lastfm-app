// styles
import { searchContainer, searchContainerHeader } from "./styles.module.scss";

// component
import ChooseSearch from "../ChooseSearch";
import SearchInput from "../SearchInput";

const Index = ({ header, placeholder, search }) => {
  return (
    <div className={searchContainer}>
      <div className={searchContainerHeader}>
        <h2>Pesquise:</h2>
        <ChooseSearch />
      </div>
      <SearchInput />
    </div>
  );
};

export default Index;
