import React from 'react';

function Summary(props) {
    console.log(props)
    return(
        <div className="summ-content">
            <h2 className="summ-title">Sammanfattning av bokning: </h2>
            <h2>Name: { props.name }</h2>
            <h2>Trip: { props.departure }</h2>
            <h2>- { props.destination }</h2>
        </div>
    )
}

export default Summary