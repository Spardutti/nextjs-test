import styles from "../styles/navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/loginSlice";
import { useState } from "react";

export const Navbar = () => {
  const isLogged = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const [test, setTest] = useState("probando");

  return (
    <div className={styles.test}>
      <p>hola</p>
      {isLogged}
      <div>
        <button onClick={() => dispatch(login())}>login</button>
        <button onClick={() => dispatch(logout())}>logout</button>
      </div>
      <p>{test}</p>
    </div>
  );
};
