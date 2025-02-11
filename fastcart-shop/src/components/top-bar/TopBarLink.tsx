import styles from "./TopBar.module.scss";
import { Link } from "react-router-dom";

const TopBarLink = () => {
  return (
    <div className={styles.topbar__link}>
      <span>Something you love is now on sale! </span>
      <Link to={""}>Buy now!</Link>
    </div>
  );
};

export default TopBarLink;
