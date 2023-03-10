import styles from './styles.module.css'

import PinturaInternet from '../../../../assets/pintura-internet.jpg';

function PinturasLayout() {
  return (
    <div className={styles['portada']}>
      <img className={styles['imagen-portada']} src={PinturaInternet} alt="pintura-internet" />
      <p className={styles['texto-imagen']}>Medrano 617.2016.Óleo s/tela. 115 x 175 cm. </p>
    </div>
  );
}

export default PinturasLayout;
