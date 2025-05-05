import Header from "../Header";
import Footer from "../Footer";
import styles from "./layout.module.css";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div className={styles["layout"]}>
      <Header />
      <main className={styles["main"]}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
