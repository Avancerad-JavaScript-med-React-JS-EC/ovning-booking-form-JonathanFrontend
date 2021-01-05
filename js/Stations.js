import React from 'react';

function Stations(props) {
    return (
        <ul className="stat-list">
            <li>
                <div>
                <h2> {props.from} </h2>
                <p> {props.leave} </p>
                </div>
            </li>
            <li>
                <div>
                <h2> {props.to} </h2>
                <p> {props.inTime} </p>
                </div>
            </li>
        </ul>
    )
}

export default Stations