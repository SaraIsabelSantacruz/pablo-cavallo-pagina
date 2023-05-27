import { useState, useEffect } from 'react';
import Carrusel from "./Carrousell";
import { OLEOS, DESCRIPCIONES } from "./constants";
import styles from './styles.module.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';

const ImportImages = OLEOS.map(async oleo => {
  const module = await import(`../../../../assets/oleo/${oleo}`);
  const src = module.default;
  return src;
});

function Oleos() {
  const [urlImages, setUrlImages] = useState([]);
  const [loader, setLoader] = useState(true);
  const { pinturaId } = useParams();

  useEffect(() => {
    Promise.all(ImportImages)
    .then(function(results) {
      setUrlImages(results);
    });
  }, []);

  const onLoadImage = () => {
    console.log('ENTRA AQUI')
    setLoader(false)
  }
  console.log(loader)
  return (
    <>
      <Outlet />
      <div className={cn(styles['container-gallery'], pinturaId && styles['detalle-abierto'])}>
        {
          urlImages.map(image => (
            <Link to={image.split('/')[3]} key={image}>
              <img href={image} loading='lasy' style={{display: 'none'}} alt='' />
              <div className={cn(styles.image)} loading='lasy' style={{
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