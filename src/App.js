import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import Pizza from "./components/Pizza";


function App() {
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
            <Pizza title="Пицца-1" price="1489" />
            <Pizza title="Пицца-2" price="148" />
            <Pizza title="Пицца-3" price="14" />
            <Pizza title="Пицца-4" price="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
