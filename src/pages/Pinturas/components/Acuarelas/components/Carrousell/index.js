import { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Carrusel({items, descriptions}) {
  const [itemSelected, setItemSelected] = useState('');
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    const newItems = items.map((item, index) => ({
      url:item,
      description: descriptions[index]
    }))
    setItemsToShow(newItems);
    setItemSelected(items[0]);
  }, [items]);

  const handleClick = (item) => {
    setItemSelected(item)
  }

  const imageSelectedStyle = {
    backgroundImage: 'url(' + itemSelected + ')'
  };

  return (
    <>
      <div className={styles['container-image-selected']}>
        <div className={styles['container-selected']} style={imageSelectedStyle}></div>
        <p className={styles['image-text']}>Acuarela S/papel 300 grs. 25 x 32 cm </p>
      </div>
      <div className={styles['container-scroll']}>
        {items.map((item, index) => {
          return (
            <button key={item} style={{
              backgroundImage: 'url(' + item + ')'
            }} onClick={() => handleClick(item)} className={styles["image-to-select"]}> </button>);
          })}
      </div>
    </>
  );
}

export default Carrusel;
