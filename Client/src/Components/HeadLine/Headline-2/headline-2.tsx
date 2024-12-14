import './headline-2.css'


export default function Headline_2({ headline }: { headline: string }) {
    return (
        <header className='headline-2'>
            <h2>{headline}</h2>
        </header>
    )
}