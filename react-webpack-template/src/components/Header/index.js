import styles from "./header.module.css";
import { NavLink } from "react-router";

console.log(styles);

function Header() {
  return (
    <header className={styles["header"]}>
      <ul className={styles["nav-list"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
