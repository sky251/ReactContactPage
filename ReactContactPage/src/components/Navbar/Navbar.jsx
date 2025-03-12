import styles from "./Navbar.module.css";
import "../../App.css"

const Navbar = () => {
  
  return (
    <nav className={`${styles.navigationbar} container`}>
      <div>
        <img className={`${styles.navbar_logo}`} src="public/images/logo.png" alt="logo" />
      </div>
      <ul className={`${styles.navbar_ul}`}>
        <li>Home</li>
        <li>About</li>

        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
