import { Card } from "../card"

import getPokeList from "../../services/pokeList"

async function CardList() {
    const pokeList = await getPokeList()

    console.log(pokeList)
    return (
        <div>
            <h1>Home</h1>
            <p>{ pokeList }</p>
            {/* { getPokeList().map(pokemon => <Card pokemon={pokemon} />)} */}
        </div>
    )
}

export default CardList