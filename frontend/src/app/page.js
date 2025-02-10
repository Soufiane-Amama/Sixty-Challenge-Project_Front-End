import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header /> 
      <main className={styles.main}>
        هنا محتوى الصفحة الرئيسية.. 
      </main>
      <Footer />
    </div>
  );
}
