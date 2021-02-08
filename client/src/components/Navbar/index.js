import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// component
import Dropdown from "../Dropdown";

// css classes
import { navbarContainer, userSection, logBtn } from "./styles.module.scss";

// action
import { logout } from "../../actions/userActions";

const Index = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={navbarContainer}>
      <Link to="/">
        <strong>LASTFM SEARCH</strong>
      </Link>
      <div className={userSection}>
        {userData ? (
          <>
            <Dropdown title={userData.name}>
              <Link to="/pesquisas">Buscas recentes</Link>
              <div
                data-cy="logout"
                style={{ width: "100%" }}
                onClick={logoutHandler}
              >
                Sair
              </div>
            </Dropdown>
          </>
        ) : (
          <div>
            <Link to="/login">
              <button data-cy="login" className={logBtn}>
                ENTRAR
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Index;
