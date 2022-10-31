
import React from 'react'

const Card = ({ cardData }) => {
    return (
        <div style={{ border: "1px solid black", borderRadius: "0.5rem", maxWidth: "30vw", padding: "0.5rem", margin: "0.5rem", wordWrap: "break-word", fontSize: "min(max(3vh,  16px), 24px)" }}>
            {cardData}
            {console.log(cardData, "cardData")}
        </div>
    )
}

export default Card