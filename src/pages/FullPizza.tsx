import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom"

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string;
        title: string;
        price: number;
    }>();
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://62c6d70b74e1381c0a6a40ec.mockapi.io/items/${id}`)
                setPizza(data)
            } catch (error) {
                alert("Error to get pizza")
                navigate('/')
            }
        }

        fetchPizza()
    }, [])

    if (!pizza) {
        return <>Загрузка...</>
    }

    return (
        <div className="container">
            <div>{id}</div>
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <Link to="/">
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </div>
    )
}

export default FullPizza;
