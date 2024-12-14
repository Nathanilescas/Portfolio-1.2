import Headline_2 from "../../../Components/HeadLine/Headline-2/headline-2";

import './category.css'

export default function Category({ categoryElements }) {
    
    const singleCategory = () => {
        return (
            <>
                {
                    categoryElements.map((element, index) => (
                        <SingleElement
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

function SingleElement({name, description}) {
    return (
        <span className="single-element">
            <h3>{name}</h3>
            <p>{description}</p>
        </span>
    )
}