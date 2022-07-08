import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";
import axios from "axios"
import { useEffect, useState } from "react";


const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://62c6d70b74e1381c0a6a40ec.mockapi.io/items')
            .then((response) => response.data)
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="content__top">
                <Category />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
                    :
                    items.map((item, key) =>
                        <Pizza key={key}
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
        </>
    );
}

export default Home