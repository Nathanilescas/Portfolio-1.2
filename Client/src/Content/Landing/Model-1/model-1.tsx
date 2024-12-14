import './model-1.css'

interface PageDescription {
    title: string,
    header_1: string,
    paragraph_1: string,
    
    header_2: string,
    paragraph_2: string,

    image: string,
}

export default function Model1( { pageDescription }: { pageDescription: PageDescription } ) {
    return (
        <main id="model-1">
            <header><h1>{ pageDescription.title }</h1></header>
            <div className='model-inner-container'>
                <figure className='show-case'>
                    <img src={ pageDescription.image } alt={ pageDescription.title } />
                </figure>
                <article className='description-container'>
                    <div>
                        <h2>{ pageDescription.header_1 }</h2>
                        <p>{ pageDescription.paragraph_1 }</p>
                    </div>
                    <div>
                        <h2>{ pageDescription.header_2 }</h2>
                        <p>{ pageDescription.paragraph_2 }</p>
                    </div>
                </article>
            </div>
        </main>
    )
}