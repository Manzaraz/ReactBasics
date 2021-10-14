import React, { Component } from 'react';
import data from "../helpers/data.json"

function ElementoLista(props) {
    let {web,name} = props
    return (
        <li >
            <a href={web}>{name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Spring", "Summer", "Fall", "Winter"]
        }
    }
    render () {
        // console.log(data)
        return (
            <>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index) => <li key={index}>{el}</li>)
                    }
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map(el => <ElementoLista key={el.id} web={el.web} name={el.name} />)
                    }
                </ul>
            </>
        )
    }
}