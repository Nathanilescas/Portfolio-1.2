
export default function PageHeader(props:any) {
    return (
        <header>
            <h2>Introduction to</h2>
            <h1>{props.title}</h1>
            <h2>{props.subject}</h2>
        </header>
    )
}