import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
import { SelectMenuNav } from '../utils';
import { MENU } from './constants';

function Pinturas() {
  const location = useLocation();
  const routeName = SelectMenuNav(location.pathname);
  return (
  <div className={styles['container']}>
    <Navbar href={MENU[routeName].href} items={MENU[routeName].items} title={MENU[routeName].titulo} />
    <Outlet />
  </div>
  );
}

export default Pinturas;
