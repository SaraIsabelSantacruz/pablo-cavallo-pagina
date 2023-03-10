import { Outlet } from 'react-router';
import styles from './styles.module.css'

function Acuarelas() {
  return (
  <div className={styles['container']}>
    <Outlet />
  </div>
  );
}

export default Acuarelas;
