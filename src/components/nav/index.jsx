import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

function myActive(isActive) {
  return {
    color: isActive ? 'white' : 'gray' ,
     
     fontSize: '15px',
      fontWeight: '600', 

  };
}

function Nav() {
  return (
    <nav className={styles.navContainer}>
      <NavLink to="/" style={({ isActive }) => myActive(isActive)}>
        Store
      </NavLink>
      <NavLink  to="/basket" style={({ isActive }) => myActive(isActive)}>
        Basket
      </NavLink>
      <NavLink to="/contacts" style={({ isActive }) => myActive(isActive)}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Nav;
