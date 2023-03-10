import { Link } from "react-router-dom";
import './styles.css';

import { MENU_NAVBAR } from './constants';

const Nav = () => {

  return (
    <header className="header">
      <div className='menu-container'>
        {
          MENU_NAVBAR.map((element, i) => (
            <Link
              key={element.id}
              className={`menu-items item-${i}`}
              to={element.ruta}
            >{element.titulo}
            </Link>
          ))
        }
      </div>
    </header>
  )
}

export default Nav;
