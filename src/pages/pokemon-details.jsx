import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemonData } from "../services/getPokemonData";
import { ThemeContext } from "../contexts/theme-toggler";
import { Container } from "../styles/pokemon-details-style";

import whiteArrow from "../assets/images/white-arrow.png";
import "../styles/types.css";

const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext);
    const { pokemon } = useParams();
    const navigate = useNavigate();
    const [pokeInfos, setPokeInfos] = useState({
        abilities: [],
        types: [],
        moves: []
    });

    const fetchData = async (pokeName) => {
        const pokeData = await getPokemonData(pokeName);
        setPokeInfos(pokeData);
    }

    try {
        useEffect(() => {
            fetchData(pokemon);
        }, [pokemon])
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    const navigateToPokemon = async (type) => {
        let newPokeData
        if (type === "prev") {
            pokeInfos.prevPokemon === 10000 ? pokeInfos.prevPokemon = 1025 : pokeInfos.prevPokemon
            newPokeData = await getPokemonData(pokeInfos.prevPokemon);
            setPokeInfos(newPokeData);
        } else if (type === "next") {
            pokeInfos.nextPokemon === 1026 ? pokeInfos.nextPokemon = 10001 : pokeInfos.nextPokemon
            newPokeData = await getPokemonData(pokeInfos.nextPokemon);
        }
        if (newPokeData) {
            navigate(`/pokemon-info/${newPokeData.name}`);
        }
    }

    return (
        <Container theme={theme}>
            <div className="main">
                <div className="nav-btns">
                    <button
                        className="prev-btn nav-btn"
                        onClick={() => navigateToPokemon("prev")}
                        disabled={pokeInfos.prevPokemon === 0}
                    >
                        <img src={whiteArrow} alt="back arrow" />
                        <span> N° {pokeInfos.prevPokemon}</span>
                        <h3 className="prev-pokemon-name">Prev Pokémon </h3>
                    </button>

                    <button
                        className="next-btn nav-btn"
                        onClick={() => navigateToPokemon("next")}
                        disabled={pokeInfos.nextPokemon === 10278}
                    >
                        <h3 className="next-pokemon-name">Next Pokémon </h3>
                        <span> N° {pokeInfos.nextPokemon}</span>
                        <img src={whiteArrow} alt="next arrow" />
                    </button>
                </div>

                <div className="pokemon-name">
                    <h1>
                        <span className="span">{pokeInfos.name} </span>
                        N° {pokeInfos.pokedexId}
                    </h1>
                </div>

                <div className="images">
                    <h2>{pokeInfos.name}'s visuals</h2>

                    {
                        pokeInfos.frontImg ?
                            <>
                                <p className="img-alt">Normal {pokeInfos.name}'s front and back view</p>
                                <img src={pokeInfos.frontImg} alt={pokeInfos.name} />
                            </>
                            :
                            <p>{pokeInfos.name}'s front view not available</p>
                    }

                    {
                        pokeInfos.backImg ?
                            <img src={pokeInfos.backImg} alt={`${pokeInfos.name}'s back`} />
                            :
                            <p>{pokeInfos.name}'s back view not available</p>

                    }

                    {
                        pokeInfos.frontShinyImg ?
                            <img src={pokeInfos.frontShinyImg} alt={`${pokeInfos.name} Shiny`} />
                            :
                            <p>Shiny {pokeInfos.name}'s front view not available</p>
                    }


                    {
                        pokeInfos.backShinyImg ?
                            <>
                                <img src={pokeInfos.backShinyImg} alt={`${pokeInfos.name} Shiny's back`} />
                                <p className="img-alt">Shiny {pokeInfos.name}'s front and back view</p>
                            </>
                            :
                            <p>Shiny {pokeInfos.name}'s back view not available</p>
                    }

                </div>
                <div className="infos-container">
                    <div className="info-chart">
                        <h3>Pokédex Number: <span># {pokeInfos.pokedexId}</span></h3>
                        <ul>
                            <h3>Abilities</h3>
                            {
                                pokeInfos.abilities.map((ability, index) => {
                                    return (
                                        <li key={index}>
                                            <h4>{ability.name}</h4>
                                            <p>{ability.effect}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="types">
                        <h3>Type{pokeInfos.types.length > 1 ? 's' : ''}</h3>
                        <ul>
                            {
                                pokeInfos.types.map((type, index) => {
                                    return (
                                        <li key={index} className={`type ${type.type.name}`}>
                                            <p>{type.type.name}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>


                <div className="moves">
                    <h2>Move List</h2>
                    <p>List of all {pokeInfos.name}'s moves</p>
                    <ul>
                        {
                            pokeInfos.moves.map((move, index) => {
                                return (
                                    <li key={index}>
                                        {move.move.name}
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </Container>

    )

}



export { PokemonDetails }