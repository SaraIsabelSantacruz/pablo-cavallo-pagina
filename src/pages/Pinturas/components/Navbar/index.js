import { Link } from "react-router-dom";
import styles from './styles.module.css';

function Navbar({items, title, href}) {
  return (
    <>
      <div className={styles['menu-pinturas-color']}></div>
      <div className={styles['menu-pinturas']}>
        <Link className={styles['title-menu']} to={href}>{title}</Link>
        {
          items.map((element, i) => (
            <Link
              key={element.id}
              className={styles['menu-items']}
              to={element.route}
            >{element.title}
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Navbar;
