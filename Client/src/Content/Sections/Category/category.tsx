import Headline_2 from "../../../Components/HeadLine/Headline-2/headline-2";

import './category.css'


interface ItemDescription {
    name: string,
    description: string,
}

export default function Categories( { categoryElement } : { categoryElement: ItemDescription[] } ) {
    
    const singleCategory = () => {
        return (
            <>
                {
                    categoryElement.map(( element:{ name: string, description: string }, index:number ) => (
                        <Category
                            name={element.name}
                            description={element.description}
                            key={index}
                        />
                    ))
                }
            </>
        )
    }


    return (
        <section >
            <Headline_2
                headline={"Libraries"}
            />
            <div className="category-container">
                {singleCategory()}
            </div>
        </section>
    )
}

function Category( { name, description }: ItemDescription ) {
    return (
        <span className="single-element">
            <h3>{name}</h3>
            <p>{description}</p>
        </span>
    )
}