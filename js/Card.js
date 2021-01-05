import React, {Component} from 'react';
import Form from './Form';
import Btn from './Btn';
import Stations from './Stations'
import Summary from './Summary'

class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Åka tåg',
            firstName: '',
            lastName: '',
            departure: 'Stockholm',
            destination: 'Göteborg'
        };
        this.handleSummary = this.handleSummary.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.name = this.name.bind(this)
      }
    handleSummary(event) {
        this.setState({ title: 'Bokad biljett'})
        const dest = document.querySelector('.dest');
        const summ = document.querySelector('.summ');
        dest.style.display = 'none';
        summ.style.display = 'block';
        event.preventDefault();
    }
    changeFirstName(event){
        this.setState({ firstName: event.target.value })
    }
    changeLastName(event) {
        this.setState({ lastName: event.target.value })
    }
    name() {
        return (
            `${this.state.firstName} ${this.state.lastName}`
        )
    }
    render() {
        return (
            <section className="wrapper">
                <h1>{ this.state.title }</h1>
                <div className="dest">
                    <Stations from={ this.state.departure } leave="10:30" to={ this.state.destination } inTime="14:45"/>
                    <Form firstName={this.state.firstName} lastName={this.state.lastName} handleSummary={this.handleSummary} changeFirstName={this.changeFirstName} changeLastName={this.changeLastName}/>
                </div>
                <div className="summ">
                    <Summary departure={this.state.departure} destination={this.state.destination} name={this.state.firstName + ' ' + this.state.lastName}/>
                </div>
            </section>
        )
    }
}
/* ÅKA TÅG - vyn
1. Lägga in state på de olika alternativen/inputfälten
2. Default state på vissa
3. ändra på bokningen = ändra på states
4. skicka våra states som props in i den nya komponenten
som ska renderas
5. "byta sida"-knapp (BOKA) som leder oss till den nya komponenten

BOKAD BILJETT (nästa vy)
1. Rendera en ny komponent där de uppdaterade statesen
ska in och visas */

export default MainContent