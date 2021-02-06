import { tag } from "./styles.module.scss";

const index = ({ text, link }) => {
  return link ? (
    <a target="_blank" rel="noreferrer" href={link}>
      <div className={tag}>
        <p>{text}</p>
      </div>
    </a>
  ) : (
    <div className={tag}>
      <p>{text}</p>
    </div>
  );
};

export default index;
