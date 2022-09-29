import React from 'react'
import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <p align= "center"><font size="10" >Ошибка 404</font><br/>
    <font size="5" ><Link to="/soccerstat/League">Страницы не существует или она была удалена</Link></font>
    </p>
    
  )
}

export default Notfoundpage