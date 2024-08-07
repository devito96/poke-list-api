import axios from 'axios';

async function getPokemonData() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);

    const pokemonList = response.data.results;

    const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        const details = detailsResponse.data;

        return {
            name: details.name,
            pokedexNumber: details.id,
            image: details.sprites.front_default
        };
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    return pokemonDetails;
}


export default getPokemonData