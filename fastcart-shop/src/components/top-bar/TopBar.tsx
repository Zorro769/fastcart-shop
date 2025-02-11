import TopBarAddress from "./TopBarAddress";
import TopBarLink from "./TopBarLink";
import TopBarLanguageCurrency from "./TopBarLanguageCurrency";
import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topbar__container}>
      <TopBarAddress />
      <TopBarLink />
      <TopBarLanguageCurrency />

      {/* <div className="topbar__address"></div>
      <div className="topbar__link"></div>
      <div className="topbar__language-currency"></div> */}
    </div>
  );
};

export default TopBar;
