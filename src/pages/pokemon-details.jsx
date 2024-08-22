import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemonData } from "../services/getPokemonData";
import styled from "styled-components";
import "../css/types.css"

const PokemonDetails = () => {
    try {
        const { pokemon } = useParams();

        const [pokeInfos, setPokeInfos] = useState({});

        useEffect(() => {
            const fetchData = async () => {
                const pokeData = await getPokemonData(pokemon);
                setPokeInfos(pokeData);
            }
            fetchData();
        }, [])

        return (
            <Container>
                <div className="main">
                    <h1 className="pokemon-name"><span className="pokemon-name span">{pokeInfos.name}</span> N° {pokeInfos.pokedexId}</h1>
                    <div className="images">
                        <img src={pokeInfos.frontImg} alt={pokeInfos.name} />
                        <img src={pokeInfos.backImg} alt={`${pokeInfos.name}'s back`} />
                        <p className="img-alt">Normal {pokeInfos.name}'s front and back view</p>

                        <img src={pokeInfos.frontShinyImg} alt={`${pokeInfos.name} Shiny`} />
                        <img src={pokeInfos.backShinyImg} alt={`${pokeInfos.name} Shiny's back`} />
                        <p className="img-alt">Shiny {pokeInfos.name}'s front and back view</p>
                    </div>

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
                    <ul className="moves">
                        <h2>Moves</h2> 
                        {
                            pokeInfos.moves.map((move, index) => {
                                return (
                                    <li key={index}>
                                        <p>{move.move.name}</p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </Container>

        )
    } catch (error) {
        console.error('Ti fudeu negrao deu ruim', error)
    }
}

const Container = styled.div`
    & {
        background-color: #eeeeee;
        opacity: 1;
        background-image:  radial-gradient(#ffffff 4px, transparent 4px), radial-gradient(#ffffff 4px, #eeeeee 4px);
        background-size: 80px 80px;
        background-position: 0 0,40px 40px;
    }

    .main {
        width: 80%;
        margin: 0 auto;
        background-color: #efefef;
        text-transform: capitalize;
        display: grid;
        grid:
            "name name" 75px
            "images infos" auto
            " . types" 125px
            "moves moves" auto / 1fr 1fr;
        gap: 15px;
    }

    .pokemon-name {
        grid-area: name;
        text-align: center;
        padding: 20px;
        color: #545454
    }

    .pokemon-name.span {
        color: #000000;
    }

    .images {
        grid-area: images;
        margin: 0 auto;
        border-radius: 10px;
        width: 500px;
        height: 500px;
    }

    .images img {
        width: 250px;
        background-color: #dededede;
    }
    
    .info-chart {
        grid-area: infos;
        color: #fff;
        background-color: #30a7d7;
        border-radius: 10px;
        margin: 0 20px 0 20px;
        padding: 20px;
        height: fit-content;
    }

    .info-chart h4, .info-chart h3 {
        color: #000;
    }

    .info-chart span {
        color: #FFFFFF;
        font-weight: 400;
    }

    .info-chart ul {
        margin-top: 20px;
    }

    .info-chart li p {
        text-transform: none;
        margin-bottom: 10px;
    }

    .types {
        grid-area: types;
        padding: 20px;
    }
    
    .types h3 {
        margin-bottom: 15px;
        font-size: 24px;
    }

    .types ul {
        display: flex;
    }

    .moves {
        grid-area: moves;
    }
`

export { PokemonDetails }