import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../redux/slices/filterSlice"

import { SearchContext } from '../App';
import axios from "axios"

import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";



const Home = () => {
    const dispach = useDispatch()
    const { activeCategory, sort } = useSelector(state => state.filter)

    const { searchValue } = useContext(SearchContext);

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const skeleton = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
    const pizzas = items.map((obj) =>
        <Pizza key={obj.id}
            {...obj}
        />
    )

    useEffect(() => {
        setIsLoading(true)

        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : "desc"
        const search = searchValue ? searchValue : ""

        axios.get(`https://62c6d70b74e1381c0a6a40ec.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${search}`)
            .then((response) => response.data)
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [activeCategory, sort, searchValue])

    return (
        <>
            <div className="content__top">
                <Category activeCategory={activeCategory} setActiveCategory={(id) => dispach(setActiveCategory(id))} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeleton : pizzas}
            </div>
        </>
    );
}

export default Home