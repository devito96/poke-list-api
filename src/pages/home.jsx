import { useState, useEffect } from "react"
import styled from "styled-components"

import { CardsList } from "../components/cardslist"

import getPokemonList from "../services/getPokemonList"

import filterBlack from "./../assets/images/filter-icon-black.png"

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [pokeData, setPokeData] = useState([])

    useEffect(() => {
        setLoading(true)
        try {
            const fetchData = async () => {
                const pokemonData = await getPokemonList(offset)

                setPokeData(pokemonData);
                setOffset(offset + 10)
            }
            fetchData();
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false)
        }

    }, [])

    async function handleClick() {
        const newPokeData = await getPokemonList(offset);
        setPokeData(prevPokeData => [...prevPokeData, ...newPokeData])
        setOffset(offset + 10)
    }


    return (
        <Container>
            <div className="main">
                <div className="title">
                    <h1>Pokémon List</h1>
                    <img src={filterBlack} alt="filter icon" className="filter" />
                </div>

                <span className="line" />

                <div className="cards">
                    <CardsList pokemons={pokeData} />
                </div>

                <div className="show-more">
                    <button onClick={handleClick}>
                        {loading ? 'Loading...' : 'Show more'}
                    </button>
                </div>
            </div>
        </Container>

    )
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
        background-color: #efefef;
        width: 85%;
        margin: 0 auto;
    }

    .title {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin: 0 auto;
    }

    .title .filter {
        cursor: pointer;
        transition: 0.3s;   
    }

    .title .filter:hover {
        transform: scale(1.1);
    }
    
    .line {
        display: block;
        content: '';
        background-color: #ccc;
        width: 82%;
        height: 2px;
        margin: 0 auto 30px;
    }

    .show-more {
        display: flex;
        justify-content: center;
        padding: 50px;
    
    }
`

export { Home }