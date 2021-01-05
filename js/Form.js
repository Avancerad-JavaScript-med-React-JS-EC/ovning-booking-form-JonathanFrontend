import React, {Component} from 'react';
import { render } from 'react-dom';
import Btn from './Btn';

function Form(props) {
    return (
        <form className="form" onSubmit={ props.handleSummary }>
            <div className="col-1">
                <div className="col-radio">
                <div className="col-2">
                <input type="radio" name="class" id="secondClass" checked="checked"/>
                <label for="secondClass">2:a Klass</label>
                </div>
                
                <div className="col-2">
                <input type="radio" name="class" id="firstClass"/>
                <label for="firstClass">1:a Klass</label>
                </div>
                </div>
            </div>
            <div className="col-2 col-list">
            <label for="tickets">Antal biljetter:</label>
            <select className="list" id="tickets" name="tickets" size="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
            <div className="col-2 col-list">
            <label for="tickets">Titel:</label>
            <select className="list" id="title" name="title" size="1">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
            </select>
            </div>
            <div className="col-1">
                <label for="firstName" className="name-label">Förnamn</label>
                <input type="text" className="name" id="firstName" name="firstName" value={props.firstName} onChange={props.changeFirstName}/>
            </div>
            <div className="col-1">
                <label for="lastName" className="name-label">Efternamn</label>
                <input type="text" className="name" id="lastName" name="lastName" value={props.lastName} onChange={props.changeLastName}/>
            </div>
            <div className="col-1">
                <input type="checkbox" name="villkor"/>
                <label for="villkor">Godkänner villkoren</label>
            </div>
                <Btn/>
        </form>
    )
}

export default Form