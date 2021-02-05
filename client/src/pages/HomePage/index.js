import {
  wrapper,
  navbar,
  userSection,
  userImg,
  logBtn,
} from "./styles.module.scss";

const HomePage = () => {
  return (
    <div className={wrapper}>
      <nav className={navbar}>
        <strong>LAST.FM SEARCHER</strong>
        <div className={userSection}>
          <div className={userImg}>USER</div>
          <div className={logBtn}>SIGN IN | OUT</div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
