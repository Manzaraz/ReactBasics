import React, { Component } from 'react';


export class EventosES6 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar (e) {
        console.log("Sumando")
        // console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar (e) {
        console.log("Restando")
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render() {
        return (
            <>
                <h2>Eventos en componentes de Clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.restar} >-</button>
                    <button onClick={this.sumar} >+</button>
                </nav>
            </>
        )
    }
}
export class EventosES7 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar (e) {
        console.log("Sumando")
        // console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar (e) {
        console.log("Restando")
        this.setState({
            contador: this.state.contador - 1
        })
    }
    render() {
        return (
            <>
                <h2>Eventos en componentes de Clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.restar} >-</button>
                    <button onClick={this.sumar} >+</button>
                </nav>
            </>
        )
    }
}
