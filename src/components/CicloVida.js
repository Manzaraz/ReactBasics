import React, {Component} from "react";

class Reloj extends Component {
    constructor(props) {
        super(props)
        console.log("hola")
    }
    componentWillUnmount(){
        console.log(3, "El componente ha sido eliminado del DOM");
    }
    render() {
        return (
            <>
                <h3>{this.props.hora}</h3>
            </>
        )
    }
}

export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se inicializa, aún NO está en el DOM")

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        };
        this.temporizador = null;
    }

    tictoc = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000);
    }

    iniciar = () => {
        this.tictoc();
        this.setState({
            visible: true
        })
    }

    detener = () => {
        clearInterval(this.temporizador);        
        this.setState({
            visible: false
        })
    }

    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProps)
        console.log(prevState)
    }


    render() {
        console.log(4, "El componente se dibuja (o se redibuja) por un cambio en el DOM")
        return (
            <>
                <h2>Ciclo de vida de los Componentes de Clase</h2>
                {/* <h3>{this.state.hora}</h3> */}
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>

        )
    }
}