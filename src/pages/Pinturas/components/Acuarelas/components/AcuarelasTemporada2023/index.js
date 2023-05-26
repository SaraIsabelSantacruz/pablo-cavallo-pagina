import { useState, useEffect } from 'react';
import Carrusel from "../Carrousell";
import { ACUARELAS, DESCRIPCIONES } from "./constants";

const ImportImages = ACUARELAS.map(acuarela => {
  return import(`../../../../../../assets/2023/${acuarela}`)
  .then(module => module.default)
  .then(src => src);
});

function AcuarelasTemporada2023() {
  const [urlImages, setUrlImages] = useState([]);

  useEffect(() => {
    Promise.all(ImportImages).then(function(results) {
      setUrlImages(results);
    });
  }, []);

  return (
    <Carrusel items={urlImages} descriptions={DESCRIPCIONES} />
  );
}

export default AcuarelasTemporada2023;
