import styles from "./styles.module.scss";
function Main({ children, h3prop }) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.h3Container}>
        <h3>{h3prop}</h3> 
      </div>
      <div className={styles.line}></div>
      {children}
    </main>
  );
}
export default Main;
