import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavDropdown } from "react-bootstrap";

// css classes
import {
  navbar,
  userSection,
  dropdownItemStyle,
  logBtn,
} from "./styles.module.scss";

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
    <nav className={navbar}>
      <Link to="/">
        <strong>LAST.FM</strong>
      </Link>
      <div className={userSection}>
        {userData ? (
          <Nav>
            <NavDropdown title={userData.name} id="username">
              <NavDropdown.Item>
                <Link to="/pesquisas" className={dropdownItemStyle}>
                  Pesquisas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                <span className={dropdownItemStyle}>Sair</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <div>
            <Link to="/login">
              <button className={logBtn}>ENTRAR</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Index;
