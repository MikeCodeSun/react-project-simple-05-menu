import { useState } from "react";
import Categories from "./Categories";
import menu from "./data";
import Menu from "./Menu";

const allcategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allcategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newMenu = menu.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Menu</h2>
          <div className="title-underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
