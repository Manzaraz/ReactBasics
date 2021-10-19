import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
    let url = "https://pokeapi.co/api/v2/pokemons/"
    url = "https://jsonplaceholder.typicode.com/users"

    let { data, isPending, error} = useFetch(url)
    
    return (
        <>
            <h2>Hooks Personalizados con Fetch</h2>
            <h3>Is Pending: {JSON.stringify(isPending)}</h3>
            <h3>Error: 
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h3>Data: 
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    )
}