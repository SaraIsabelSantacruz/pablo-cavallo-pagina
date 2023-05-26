import { useState, useEffect } from 'react';
import Carrusel from "./Carrousell";
import { OLEOS, DESCRIPCIONES } from "./constants";
import styles from './styles.module.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';

const ImportImages = OLEOS.map(oleo => {
  return import(`../../../../assets/oleo/${oleo}`)
  .then(module => module.default)
  .then(src => src);
});

function Oleos() {
  const [urlImages, setUrlImages] = useState([]);
  const { pinturaId } = useParams();
  useEffect(() => {
    Promise.all(ImportImages).then(function(results) {
      setUrlImages(results);
    });
  }, []);

  return (
    <>
      <Outlet />
      <div className={cn(styles['container-gallery'], pinturaId && styles['detalle-abierto'])}>
        {
          urlImages.map(image => (
            <Link to={image.split('/')[3]} key={image}>
              <div className={styles.image} style={{
              backgroundImage: 'url(' + image + ')'
            }}></div>
            </Link>
          ))
        }
      </div>
      <Carrusel items={urlImages} descriptions={DESCRIPCIONES} />
    </>
  );
}

export default Oleos;