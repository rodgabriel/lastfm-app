import { useRef, Fragment } from "react";

import {
  dropdown,
  dropdownTitle,
  ddInput,
  ddMenu,
  divider,
} from "./styles.module.scss";

const Index = ({ title, children }) => {
  const inputRef = useRef(null);
  return (
    <label className={dropdown}>
      <div className={dropdownTitle}>{title}</div>

      <input ref={inputRef} type="checkbox" className={ddInput} id="test" />

      <ul className={ddMenu}>
        {children.map((item, index) => (
          <Fragment key={index}>
            <li onClick={() => (inputRef.current.checked = false)}>{item}</li>
            <li className={divider}></li>
          </Fragment>
        ))}
      </ul>
    </label>
  );
};

export default Index;

// Esse componente recebe os items pelo props children
