import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { History, Navigation, EffectCreative } from 'swiper';

import "swiper/css";
import styles from './styles.module.css';
import { useSelector } from '../context';

function Detalle() {
  const { pinturaId } = useParams();
  const navigate = useNavigate();
  const { images: urlImages } = useSelector((state) => state);
  return (
    <div className={styles['detalle-container']}>
        <button onClick={() => navigate("/pinturas/oleos-acrilicos")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.close}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Swiper
        className={styles['my-swipper']}
        effect={"creative"}
        active-index={urlImages.find((image) => image.split('/')[3].split('.')[1] === pinturaId)}
        navigation={true}
        history={{
          key: "oleos-acrilicos",
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[Navigation, History, EffectCreative]}
      >
        {
          urlImages.length && urlImages.map(image => {
            return (
            <SwiperSlide 
              key={image}
              data-history={image.split('/')[3].split('.')[1]}
              className={styles['my-slide']}
            >
              <img className={styles['imagen-detalle']} src={image} alt='imagen-de-pintura' />
            </SwiperSlide>
          )})
        }
        </Swiper>
    </div>
  );
}

export default Detalle;