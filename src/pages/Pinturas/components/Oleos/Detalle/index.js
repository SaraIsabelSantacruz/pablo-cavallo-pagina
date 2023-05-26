import { useParams, useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

function Detalle() {
  const { pinturaId } = useParams();
  const navigate = useNavigate();
  return (
    <div className={styles['detalle-container']}>
      <div className={styles['contenedor-imagen']}>
        <button onClick={() => navigate("/pinturas/oleos-acrilicos")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.close}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img className={styles['imagen-detalle']} src={`/static/media/${pinturaId}`} alt='imagen-de-pintura' />
      </div>
    </div>
  );
}

export default Detalle;