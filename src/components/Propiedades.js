import PropTypes from "prop-types";

export default function Propiedades(props) {
    
    return (
        <>
            <h2>{props.porDefefcto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "true" : "false" }</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{`${props.objeto.nombre} ${props.objeto.correo}` }</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>            
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </>
    )
}


Propiedades.defaultProps = {
    porDefefcto: "Las Props"
}
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}