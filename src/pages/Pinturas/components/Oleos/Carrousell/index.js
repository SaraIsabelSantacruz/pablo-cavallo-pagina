import { useState, useEffect, Fragment, useRef } from 'react';
import styles from './styles.module.css';
import cn from 'classnames';

function Carrusel({items, descriptions}) {
  const [load, setLoad] = useState(true);
  const [showAllImage, setShoAllImage] = useState(false);
  const [itemSelected, setItemSelected] = useState('');
  const [itemsToShow, setItemsToShow] = useState([]);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    const newItems = items.map((item, index) => ({
      url:item,
      id: index,
      description: descriptions[index]
    }))
    setItemsToShow(newItems);
    if(newItems.length > 0) {
      setItemSelected(newItems[0]);
      setLoad(false);
    }
  }, [items]);

  const scrollToIndex = (index) => {
    const listNode = containerRef.current;
    const imgNode = listNode.querySelectorAll('button')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'center'
    });
  } 

  const handleClick = (item) => {
    scrollToIndex(item.id);
    setItemSelected(item)
  }

  const handleCarrusel = (selectedId) => {
    if(selectedId <= 0) {
      selectedId = 0;
      setItemSelected(itemsToShow[0])
    } else if(selectedId >= itemsToShow.length + 1) {
      selectedId = itemsToShow.length;
      setItemSelected(itemsToShow[itemsToShow.length])
    } else {
      setItemSelected(itemsToShow[selectedId])
    }
    scrollToIndex(selectedId);
  }

  const imageSelectedStyle = {
    backgroundImage: 'url(' + itemSelected.url + ')'
  };

  return (
    <div className={cn(styles['container-carrousell'], showAllImage && styles['dont-show'])}>
      <div className={cn(showAllImage ? styles['show-all-image'] : styles.deactive)} style={imageSelectedStyle}></div>
      <div className={styles['container-image-selected']}>
      {
        load ? <h1>Loading...</h1> : (
          <div className={styles['item-selected']}>
            <button className={styles['container-selected']} style={imageSelectedStyle} onClick={() => setShoAllImage(true)}></button>
            <div className={styles['chevron-container']}>
              <button onClick={() => handleCarrusel(itemSelected.id - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.chevron}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button onClick={() => handleCarrusel(itemSelected.id + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.chevron}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <p className={styles['image-text']}>Acuarela S/papel 300 grs. 25 x 32 cm </p>
          </div>
        )
      }
      </div>
      <div id="section" className={cn(styles['container-scroll'], showAllImage && styles['set-back'])} ref={containerRef}>
        {itemsToShow.map((item) => {
          return (
            <Fragment key={item.id} >
              <img src={item} alt='imagen-descripion'  className={styles.imagen} loading='lasy'/>
              <button id={item.id} ref={buttonRef} loading='lasy' style={{
                backgroundImage: 'url(' + item.url + ')'
              }} onClick={() => handleClick(item)} className={cn(styles["image-to-select"], load && styles.gray, item.id === itemSelected.id && styles.activeButton)}>
                <div className={cn(item.id === itemSelected.id && styles.active, styles.deactive)}></div>
              </button>
            </Fragment>);
          })}
      </div>
    </div>
  );
}

export default Carrusel;
