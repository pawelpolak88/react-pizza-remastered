import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../redux/slices/filterSlice"
import { fetchPizzas } from "../redux/slices/pizzaSlice"

import { SearchContext } from '../App';


import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";



const Home = () => {
    const dispatch = useDispatch()
    const { activeCategory, sort } = useSelector(state => state.filter)
    const { items, status } = useSelector(state => state.pizza)

    const { searchValue } = useContext(SearchContext);



    const skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
    const pizzas = items.map((obj) =>
        <Pizza key={obj.id}
            {...obj}
        />
    )


    const getPizzas = async () => {
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : "desc"
        const search = searchValue ? searchValue : "";

        dispatch(fetchPizzas({
            category, sortBy, order, search
        }))

        window.scrollTo(0, 0)
    }


    useEffect(() => {
        getPizzas()

    }, [activeCategory, sort, searchValue])

    return (
        <>
            <div className="content__top">
                <Category activeCategory={activeCategory} setActiveCategory={(id) => dispatch(setActiveCategory(id))} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
                </div>
            ) : (
                <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
            )}
        </>
    );
}

export default Home