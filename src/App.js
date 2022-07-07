import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import Pizza from "./components/Pizza";
import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://62c6d70b74e1381c0a6a40ec.mockapi.io/items')
      .then((response) => response.data)
      .then((data) => setItems(data)
      )
  }, [])


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
            {items.map((item, key) =>
              <Pizza key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                types={item.types}
                sizes={item.sizes}
                category={item.category}
                rating={item.rating}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
