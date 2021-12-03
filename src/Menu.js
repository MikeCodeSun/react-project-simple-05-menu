import React from "react";

export default function Menu({ menuItems }) {
  return (
    <div className="menu-container">
      {menuItems.map((menuItem) => {
        const { id, img, desc, title, price } = menuItem;
        return (
          <article className="menu" key={id}>
            <img src={img} alt={title} className="img menu-img" />
            <div className="menu-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="menu-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
