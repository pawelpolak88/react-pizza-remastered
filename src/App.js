import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart"

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/CountSlice'

export const SearchContext = createContext('');


function App() {
  const [searchValue, setSearchValue] = useState('')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (

    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
      {/* <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div> */}
    </div >
    // </SearchContext.Provider>
  );
}

export default App;
