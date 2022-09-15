import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="f">
      <div className="f-left">
        <h2 className="f-title">Практические модули</h2>
        <p className="f-desc">
          Работа над собственными проектами: практика групповых взаимодействий,
          кейс-методы, эссе
        </p>
      </div>
      <div className="f-right">
        <h2 className="f-title">Итоговая аттестация</h2>
        <ul className="f-list">
          <li className='f-item'>
            Бизнес-проектирование (подготовка итоговой аттестационной работы,
            консультирование по бизнес-проектированию)
          </li>
          <li className='f-item'>Защита итоговой аттестационной работы</li>
        </ul>
      </div>
    </div>
  );
}
