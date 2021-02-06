import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

// components
import Message from "../../components/Message";

// styles
import { container, formWrapper } from "./styles.module.scss";

const Index = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userData } = userLogin;

  useEffect(() => {
    if (userData) {
      history.push("/");
    }
  }, [userData, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  console.log(email, password);
  return (
    <div className={container}>
      <div className={formWrapper}>
        <h1>Bem-vindo!</h1>
        {error && <Message>{error}</Message>}
        <form onSubmit={submitHandler}>
          <label>Email:</label>
          <input
            required
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            required
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <p>Ainda não tem uma conta?</p>
        <Link to="/register">Registre-se.</Link>
      </div>
    </div>
  );
};

export default Index;
