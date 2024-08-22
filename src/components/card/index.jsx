import styled from "styled-components"
import { Link } from "react-router-dom"

import "./../../assets/fonts/fonts.css"

const Card = ({ pokemon }) => {
    return (
        <Div>
            <Link to={`/pokemon-info/${pokemon.name}`} pokemon={pokemon} >
                <div className="pokedex-deco-top">
                    <div className="red-ball1"></div>
                    <div className="red-ball2"></div>
                </div>
                <img src={pokemon.image} alt={`Image of ${pokemon.name}`} />
                <div className="info">
                    <h2 className="pokemon-info pokemon-name">{pokemon.name}</h2>
                    <p className="pokemon-info pokemon-number">Pokedex number: #{pokemon.id}</p>
                </div>
                <div className="pokedex-deco-bottom">
                    <div className="red-ball"></div>
                    <div className="stripes"></div>
                </div>
            </Link>
        </Div>
    )
}

const Div = styled.div`

    width: 200px;
    height: 250px;
    padding: 10px;
    margin: 10px;

    border-radius: 5px 25px;
    box-shadow: 5px 5px 15px 5px #bebec8;
    border: solid 2px #2a2a2a;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.3s;
    cursor: pointer;
    background-color: #efefef;
    
    img {
        width: 130px;
        background-color: #2a2a2a;
        border: solid 5px #1a1a1a;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info .pokemon-info{
        text-transform: capitalize;
        font-family: 'Pokemon Pixel Font', sans-serif;
    }

    .pokemon-info.pokemon-name {
        font-size: 26px;
    }

    .pokedex-deco-top {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -5px;
    }

    .pokedex-deco-top .red-ball1{
        content: "";
        width: 7px;
        height: 7px;
        background-color: #dc0a2d;
        border-radius: 50%;
        border: solid 1px #2a2a2a;
        margin: 10px;
    }

    .pokedex-deco-top .red-ball2{
        content: "";
        width: 7px;
        height: 7px;
        background-color: #dc0a2d;
        border-radius: 50%;
        border: solid 1px #2a2a2a;
        margin: 10px;
    }
    
    .pokedex-deco-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pokedex-deco-bottom .red-ball{
        content: "";
        width: 10px;
        height: 10px;
        background-color: #dc0a2d;
        border-radius: 50%;
        border: solid 2px #2a2a2a;
        margin: 10px;
    }

    .pokedex-deco-bottom .stripes{
        content: "";
        width: 20px;
        height: 2px;
        background-color: #2a2a2a;
        margin: 10px;
    }

    .pokedex-deco-bottom .stripes::before{
        content: "";
        width: 20px;
        height: 2px;
        background-color: #2a2a2a;
        margin-top: 5px;
        position: absolute;
    }

    .pokedex-deco-bottom .stripes::after{
        content: "";
        width: 20px;
        height: 2px;
        background-color: #2a2a2a;
        margin-top: -5px;
        position: absolute;
    }

    &:hover {
        transform: scale(1.02);
    }

`

export { Card }