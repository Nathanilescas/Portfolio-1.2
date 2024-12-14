import './headline.css'

export default function Headline(props:any) {
    return (
        <div className='headline'>
            <header><h2>{props.headline}</h2></header>
            <span className='under-line'></span>
        </div>
    )
}
