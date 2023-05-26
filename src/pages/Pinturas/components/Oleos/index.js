import { useState, useEffect } from 'react';
import Carrusel from "./Carrousell";
import { OLEOS, DESCRIPCIONES } from "./constants";
import styles from './styles.module.css';

const ImportImages = OLEOS.map(oleo => {
  return import(`../../../../assets/oleo/${oleo}`)
  .then(module => module.default)
  .then(src => src);
});

function Oleos() {
  const [urlImages, setUrlImages] = useState([]);

  useEffect(() => {
    Promise.all(ImportImages).then(function(results) {
      setUrlImages(results);
    });
  }, []);

  return (
    <>
      <div className={styles['container-gallery']}>
        {
          urlImages.map(image => (
            <div key={image} className={styles.image} style={{
              backgroundImage: 'url(' + image + ')'
            }}></div>
          ))
        }
      </div>
      <Carrusel items={urlImages} descriptions={DESCRIPCIONES} />
    </>
  );
}

export default Oleos;