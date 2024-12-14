import './card.css'

import { BsArrowBarRight } from "react-icons/bs";

interface CardInformation {
    title: string,
    description: string,
    url: string,
    image: string,
}


export default function Card({ cardInformation }: { cardInformation: CardInformation }) {
    return (
        <CardCover url={cardInformation.url}>
            <div className='card-header'>
                <h2>{cardInformation.title}</h2>
            </div>
            <figure className='card-image'>
                <img src={cardInformation.image} alt={cardInformation.title} />
            </figure>
            <CardArticle>
                {cardInformation.description}
            </CardArticle>
        </CardCover>
    )
}

function CardArticle({ children }: { children: any }) {
    return (
        <section className='card-text'>
            <p>
                {children}
            </p>

            <i><BsArrowBarRight /></i>
        </section>
    )
}


function CardCover({ url, children }: { url: string, children: any }) {
    return (
        <article className='card-cover'>
            <a href={url}>
                {children}
            </a>
        </article>
    )
}
