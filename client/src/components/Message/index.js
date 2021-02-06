import { messageContainer } from "./styles.module.scss";

const Index = ({ children }) => {
  return <div className={messageContainer}>{children}</div>;
};

export default Index;
