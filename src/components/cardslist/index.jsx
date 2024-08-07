import { Card } from "../card"
import { useState, useEffect } from "react"

import getPokemonData from "../../services/getPokemonData"

const CardList = () => {
    const [ pokeList, setPokeList ] = useState([])

    useEffect(async () => {
        const pokemonData = await getPokemonData()
        setPokeList(pokemonData)
    }, [])

    return (
        <div>
            <h1>Home</h1>
            { pokeList.map((pokemon, index) => <Card pokemon={pokemon} key={index}/>) }
        </div>
    )
}

export default CardList