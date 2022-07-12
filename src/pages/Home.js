import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";
import axios from "axios"
import { useEffect, useState } from "react";


const Home = ({ searchValue }) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [activeCategory, setActiveCategory] = useState(0)
    const [sort, setSort] = useState({ name: 'популярности', sortProperty: "rating" })

    const skeleton = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
    const pizzas = items.map((item, key) =>
        <Pizza key={key}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            types={item.types}
            sizes={item.sizes}
            category={item.category}
            rating={item.rating}
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
                <Category activeCategory={activeCategory} setActiveCategory={(i) => setActiveCategory(i)} />
                <Sort sort={sort} setSort={(i) => setSort(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeleton : pizzas}
            </div>
        </>
    );
}

export default Home