import styles from './styles.module.scss';
import Nav from '../nav';
function Header() {
  return (
    <header className={styles.headerContainer}>
      <h3>Сникер - магазин</h3>
      <Nav className={styles.navContainer} />
    </header>
  );
}
export default Header;
