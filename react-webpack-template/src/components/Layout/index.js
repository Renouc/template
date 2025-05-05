import Header from "../Header";
import Footer from "../Footer";
import styles from "./layout.module.css";
function Layout() {
  return (
    <div className={styles["layout"]}>
      <Header />
      <main className={styles["main"]}>
        12
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
