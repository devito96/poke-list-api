import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-toggler"

import { Div } from "./card-style"
import "./../../assets/fonts/fonts.css"
import pokemonShadow from "./../../assets/images/pokemon-shadow.png"

const Card = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Link to={`/pokemon-info/${pokemon.name}`} >
            <Div theme={theme}>
                <div className="pokedex-deco-top">
                    <div className="red-ball1"></div>
                    <div className="red-ball2"></div>
                </div>
                {
                    pokemon.image ? <img className="pokemon-image" src={pokemon.image} alt={`Image of ${pokemon.name}`} /> : 
                    <div className="pokemon-image">
                        <img src={pokemonShadow} alt="pokemon shadow" />
                    </div> 
                }
                <div className="info">
                    <h2 className="pokemon-info pokemon-name">{pokemon.name}</h2>
                    <p className="pokemon-info pokemon-number">Pokedex number: #{pokemon.id}</p>
                </div>
                <div className="pokedex-deco-bottom">
                    <div className="red-ball"></div>
                    <div className="stripes"></div>
                </div>

            </Div>
        </Link>
    )
}

export { Card }