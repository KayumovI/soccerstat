import React from 'react'
import logoBall from '../../assets/img/logoball.svg'
import styles from './Header.module.scss'
import { menu } from './menu'


const Header = () => {
  return (
    <div>
        <div className="logo">
          <img src={logoBall} alt="" />
        </div>
        <div className="menu-wrapper">
          <ul>
            {menu.map((item, idx) => (  
              <li key = {`menu item ${idx}`}>
                <a href={item.link}>{item.title}</a>
              </li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default Header