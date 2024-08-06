import axios from "axios";

async function getPokeList() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
    return response.data.results
}

export default getPokeList