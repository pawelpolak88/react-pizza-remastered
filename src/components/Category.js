import { useState } from "react";

const Category = () => {
    const categories = [
        ' Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="categories">
            <ul>
                {categories.map((list, keyIndex) =>
                    <li
                        onClick={() => setActiveIndex(keyIndex)}
                        className={activeIndex === keyIndex ? 'active' : ""}
                        key={keyIndex}
                    >
                        {list}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Category;