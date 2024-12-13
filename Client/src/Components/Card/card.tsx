import './card.css'

import { BsArrowBarRight } from "react-icons/bs";

export default function Card({ title, description, url, image}) {
    return (
        <CardCover url={url}>
            <div className='card-header'>
                <h2>{title}</h2>
            </div>
            <figure className='card-image'>
                <img src={image} alt={title} />
            </figure>
            <CardArticle>
                {description}
            </CardArticle>
        </CardCover>
    )
}

function CardArticle({children}) {
    return (
        <section className='card-text'>
            <p>
                {children}
            </p>

            <i><BsArrowBarRight /></i>
        </section>
    )
}


function CardCover({url, children}) {
    return (
        <article className='card-cover'>
            <a href={url}>
                {children}
            </a>
        </article>
    )
}
