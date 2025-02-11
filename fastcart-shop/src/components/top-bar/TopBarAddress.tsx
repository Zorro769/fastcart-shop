import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "./TopBar.module.scss";

const TopBarAddress = () => {
  return (
    <div className={styles.topbar__address}>
      <FontAwesomeIcon icon={faLocationDot} />
      <span>1418 Riverwood Drive, CA 96052, US</span>
    </div>
  );
};

export default TopBarAddress;
