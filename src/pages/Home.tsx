import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { setActiveCategory, selectCategory, selectSort, selectSearch } from "../redux/slices/filterSlice"
import { fetchPizzas, selectPizza } from "../redux/slices/pizzaSlice"

import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";



const Home: React.FC = () => {
    const dispatch = useDispatch()
    const activeCategory = useSelector(selectCategory)
    const sort = useSelector(selectSort)
    const searchValue = useSelector(selectSearch)
    const { items, status } = useSelector(selectPizza)

    const skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
    const pizzas = items.map((obj: any) =>
        <Link to={`/pizza/${obj.id}`} key={obj.id}>
            <Pizza
                {...obj}
            />
        </Link>
    )

    const getPizzas = async () => {
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : "desc"
        const search = searchValue ? searchValue : "";

        dispatch(
            // @ts-ignore
            fetchPizzas({
                category,
                sortBy,
                order,
                search
            }))

        window.scrollTo(0, 0)
    }


    useEffect(() => {
        getPizzas()

    }, [activeCategory, sort, searchValue])

    return (
        <>
            <div className="content__top">
                <Category activeCategory={activeCategory} setActiveCategory={(id: number) => dispatch(setActiveCategory(id))} />
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