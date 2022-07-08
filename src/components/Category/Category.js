import { useState } from "react";

const Category = ({ activeCategory, setActiveCategory }) => {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((list, keyIndex) =>
                    <li
                        key={keyIndex}
                        onClick={() => setActiveCategory(keyIndex)}
                        className={activeCategory === keyIndex ? 'active' : ""}
                    >
                        {list}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Category;