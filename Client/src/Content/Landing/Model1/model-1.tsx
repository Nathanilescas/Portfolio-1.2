import './model-1.css'


export default function Model1({ title, header1, header2, paragraph1, paragraph2, image}) {
    return (
        <main id="model-1">
            <header><h1>{title}</h1></header>
            <div className='model-inner-container'>
                <figure className='show-case'>
                    <img src={image} alt={title} />
                </figure>
                <article className='description-container'>
                    <div>
                        <h2>{header1}</h2>
                        <p>{paragraph1}</p>
                    </div>
                    <div>
                        <h2>{header2}</h2>
                        <p>{paragraph2}</p>
                    </div>
                </article>
            </div>
        </main>
    )
}