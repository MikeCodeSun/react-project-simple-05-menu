import React from "react";

export default function Categories({ categories, filterMenu }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => filterMenu(category)}
            className="btn category-btn"
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
