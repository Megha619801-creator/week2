import React from 'react'
const CreditCard = (props) => {
    const hiddenNumber =`•••• •••• •••• ${props.number.slice(-4)}`;
    return (
        <div className = "CreditCard" style={props.style}>
            <img src = {props.logo} alt={`${props.type} ${props.number}`} />
             <div className="info">
                <p>{props.type}</p>
                <p>{hiddenNumber}</p>
                <p>Expires: {props.expires } {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.owner}</p>

            
             </div>  
        </div>
    )
}
export default CreditCard;