import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
