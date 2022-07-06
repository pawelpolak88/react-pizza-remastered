import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import Pizza from "./components/Pizza";

import pizzasJson from './assets/pizzas.json'

function App() {
  // console.log(pizzasJson);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasJson.map((pizza, key) =>
              <Pizza key={key}
                imageUrl={pizza.imageUrl}
                title={pizza.title}
                price={pizza.price}
                types={pizza.types}
                sizes={pizza.sizes}
                category={pizza.category}
                rating={pizza.rating}
              />
            )}


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
