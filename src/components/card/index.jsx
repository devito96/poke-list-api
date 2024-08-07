const Card = ({ pokemon }) => {
    return (
        <div>
            <img src={pokemon.image} alt={`Image of ${pokemon.name}`} />
            <h2>{pokemon.name}</h2>
            <p>Pokédex number: #{pokemon.pokedex}</p>
        </div>
    )
}

export { Card }