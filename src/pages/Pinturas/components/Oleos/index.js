import { useState, useEffect, useReducer } from 'react';
import { Context, reducer, INITIAL_STATE, actionCreators } from './context';
import Carrusel from "./Carrousell";
import { OLEOS, DESCRIPCIONES } from "./constants";
import styles from './styles.module.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';

import "swiper/css";

const ImportImages = OLEOS.map(async oleo => {
  const module = await import(`../../../../assets/oleo/${oleo}`);
  const src = module.default;
  return src;
});

function Oleos() {
  const [oleosState, oleosDispatch] = useReducer(reducer, INITIAL_STATE);
  const [urlImages, setUrlImages] = useState([]);
  const { pinturaId } = useParams();

  useEffect(() => {
    Promise.all(ImportImages)
    .then(function(results) {
      setUrlImages(results);
      oleosDispatch(actionCreators.setImages(results))
    });
  }, []);

  return (
    <Context.Provider value={{ state: oleosState, dispatch: oleosDispatch }}>
      <div className={styles['oleos-container']}>
        <Outlet />
        <div className={cn(styles['container-gallery'], pinturaId && styles['detalle-abierto'])}>
          {
            urlImages.map(image => (
              <Link to={image.split('/')[3].split('.')[1]} key={image}>
                <div className={cn(styles.image)} loading='lasy' style={{
                backgroundImage: 'url(' + image + ')'
              }}></div>
              </Link>
            ))
          }
        </div>
        <Carrusel items={urlImages} descriptions={DESCRIPCIONES} />
      </div>
    </Context.Provider>
  );
}

export default Oleos;