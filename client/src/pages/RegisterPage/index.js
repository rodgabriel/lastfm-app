import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

// components
import Message from "../../components/Message";

// styles
import { container, formWrapper } from "./styles.module.scss";

const Index = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userData } = userRegister;

  useEffect(() => {
    if (userData) {
      history.push("/");
    }
  }, [history, userData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("A senha não confere.");
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <div className={container}>
      <div className={formWrapper}>
        <h1>Cadastre-se:</h1>
        {error && <Message>{error}</Message>}
        <form onSubmit={submitHandler}>
          <label>Name:</label>
          <input
            id="name"
            required
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            id="email"
            required
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha:</label>
          <input
            id="password"
            required
            type="password"
            placeholder="****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirme a senha:</label>
          <input
            id="confirmPassword"
            required
            type="password"
            placeholder=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {message && <h3>{message}</h3>}
          <button id="registrar" type="submit">
            Registrar
          </button>
        </form>

        <p>Já tem uma conta?</p>
        <Link to="/login">Faça login.</Link>
      </div>
    </div>
  );
};

export default Index;
