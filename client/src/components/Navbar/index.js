import { Link } from "react-router-dom";

// css classes
import { navbar, userSection, userImg, logBtn } from "./styles.module.scss";
const Index = () => {
  return (
    <nav className={navbar}>
      <Link to="/">
        <strong>LAST.FM</strong>
      </Link>
      <div className={userSection}>
        {/* <div className={userImg}>USER</div> */}
        <div className={logBtn}>SIGN IN</div>
      </div>
    </nav>
  );
};

export default Index;
