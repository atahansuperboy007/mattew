import React from 'react'

function Subscribe() {
    return (
<section className="sub">
  <div className="container">
    <div className="sub-inner">
      <h3>Подпишитесь на нашу рассылку</h3>
      <p>Полезные статьи, акции, новости - получите все это сейчас!</p>
      <div className="sub-input">
        <input type="text" placeholder="Введите почту" />
        <span>
          Подписаться
        </span></div>
      <p className="p1">Мы не шлем спам, и передаем никому ваши личные данные.</p>
    </div>
  </div>
</section>
    )
}

export default Subscribe
