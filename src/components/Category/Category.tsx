import React from "react";

type CategoryProps = {
    activeCategory: number;
    setActiveCategory: (id: number) => void;
}

const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

const Category: React.FC<CategoryProps> = ({ activeCategory, setActiveCategory }) => {
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