import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const linkStyles = ({ isActive }: { isActive: Boolean }) => {
    return isActive ? `${styles.navbar__links__link__active}` : '';
  };

  return (
    <nav className={styles.navbar__wrapper}>
      <div className={styles.navbar__links}>
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/movies" className={linkStyles}>
          Movies
        </NavLink>
      </div>
    </nav>
  );
};
