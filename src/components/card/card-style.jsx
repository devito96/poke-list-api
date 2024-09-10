import styled from "styled-components";

export const Div = styled.div`

    width: 200px;
    height: 250px;
    padding: 25px;
    margin: 10px;

    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 5px 25px;
    box-shadow: 5px 5px 15px 5px rgb(38, 38, 38, 0.5);
    border: solid 2px #1a1a1a;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.3s;
    cursor: pointer;
    
    .pokemon-image {
        min-width: 130px;
        min-height: 130px;
        background-color: #2a2a2a;
        border: solid 5px #1a1a1a;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info .pokemon-info{
        color: ${({ theme }) => theme.color};
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

    .pokedex-deco-top .red-ball1, .pokedex-deco-top .red-ball2{
        content: "";
        width: 7px;
        height: 7px;
        background-color: #dc0a2d;
        border-radius: 50%;
        border: solid 1px #1a1a1a;
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
        border: solid 2px #1a1a1a;
        margin: 10px;
    }

    .pokedex-deco-bottom .stripes{
        content: "";
        width: 20px;
        height: 2px;
        background-color: #1a1a1a;
        margin: 10px;
    }

    .pokedex-deco-bottom .stripes::before, .pokedex-deco-bottom .stripes::after{
        content: "";
        width: 20px;
        height: 2px;
        background-color: #1a1a1a;
        position: absolute;
    }

    .pokedex-deco-bottom .stripes::before {
        margin-top: 5px;

    }

    .pokedex-deco-bottom .stripes::after{
        margin-top: -5px;
    }

    &:hover {
        transform: scale(1.02);
    }

`