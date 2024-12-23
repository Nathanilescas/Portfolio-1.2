import './message-bubble.css'


export function ReceiverTextBubble({ data }: { data: TextBubbleData }) {
    return (
        <span className='message-bubble left'>
            <p>
                { data.message }
            </p>
        </span>
    )
}

export function SenderTextBubble({ data }: { data: TextBubbleData }) {
    return (
        <span className='message-bubble right'>
            <p>
                { data.message }
            </p>
        </span>
    )
}


interface TextBubbleData {
    message: string,
}