import { useState, useEffect, useContext } from "react"
import { CardsList } from "../components/cardslist"
import { getPokemonList } from "../services/getPokemonList"
import { ThemeTogglerButton } from "../components/themeTogglerButton"
import { ThemeContext } from "../contexts/theme-toggler"
import { Container } from "../styles/home-style"

import filterWhite from "./../assets/images/filter-icon-white.png"

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [pokeData, setPokeData] = useState([])

    const { theme } = useContext(ThemeContext);

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
        <Container theme={theme}>
            <div className="main">
                <div className="title">
                    <h1>PokéList - Search your favorite pokémon!</h1>
                    <div className="btns-container">
                        <ThemeTogglerButton />
                        <img src={filterWhite} alt="filter icon" className="btn filter" onClick={() => alert('Not implemented yet!')} />
                    </div>
                </div>

                <span className="divider" />

                <div className="cards">
                    <CardsList pokemons={pokeData} />
                </div>

                <div className="show-more">
                    <button onClick={handleClick}>
                        {loading ? 'Loading...' : 'Show more Pokémon'}
                    </button>
                </div>
            </div>
        </Container>
    )
}

export { Home }