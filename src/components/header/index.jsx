import pokeballIcon from "./../../images/pokeball-icon.png"
import filterWhite from "./../../images/filter-icon-white.png"
import filterBlack from "./../../images/filter-icon-black.png"
import { Link } from "react-router-dom"

import styled from "styled-components"

const Header = () => {

    return (
        <Container>
            <Link to="/">
                <div>
                    <img src={pokeballIcon} alt="pokeball icon" />
                    <h1>PokéList</h1>
                </div>
            </Link>

            <img src={filterBlack} alt="filter icon" className="filter" />
        </Container>

    )
}

const Container = styled.header`
        width: 100%;
        height: 80px;
        background-color: #ff8866;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        position: fixed;

    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #000000
    }

    img {
        padding: 10px;
        }

    img.filter {
        cursor: pointer;
        transition: 0.3s;
        }

    img.filter:hover {
        transform: scale(1.1);

`

export { Header }