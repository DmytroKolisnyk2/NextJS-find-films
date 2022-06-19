import NavLink from "../NavLink/NavLink";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__menu}>
        <NavLink exact classes={styles.menu__link} activeClass={styles.menu__linkActive} href={"/"}>
          Home
        </NavLink>
        <NavLink
          href={"/movies"}
          classes={styles.menu__link}
          activeClass={styles.menu__linkActive}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
