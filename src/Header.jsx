import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
<header className="header">
  <div className="container">
    <div className="header-inner">
      <div className="header-logo">Ель</div>
      <nav className="nav-links">
        <Link className="welcome-head" to="/">Главная</Link>
        <Link className="about-head" to="/2">О нас</Link>
        <Link className="services-head" to="/3">Услуги</Link>
        <Link className="projects-head" to="/4">Договор</Link>
        <Link className="news-head" to="/5">Подписка</Link>
        <a className="icon-head" href="#"><img src="./images/phone.png" alt="Phone" /><span className="number">8-700-216-22-47</span></a>
      </nav>
    </div>
  </div>
</header>

    )
}

export default Header
