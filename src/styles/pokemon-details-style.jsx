import styled from "styled-components";
import { themes } from "../contexts/theme-toggler";
import leftLightBlank from "../assets/images/left-blank-light.png"
import rightLightBlank from "../assets/images/right-blank-light.png"
import leftDarkBlank from "../assets/images/left-blank-dark.png"
import rightDarkBlank from "../assets/images/right-blank-dark.png"
import bgImg from "../assets/images/container-bg.png"
import pokeballListIcon from "../assets/images/pokeball-list-icon.png"

export const Container = styled.div`
    & {
        background-image: url(${bgImg});
        background-color: ${({ theme }) => theme.secondaryBackgroundColor};
    }

    .main {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
        position: relative;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        text-transform: capitalize;
        display: grid;
        grid:
            "btns btns" 125px
            "name name" 50px
            "images infos" auto
            "moves moves" auto / 1fr 1fr;
        grid-gap: 10px;
    }



    .nav-btns {
        grid-area: btns;
        width: 95%;
        margin: 15px auto 0;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .nav-btns:after {
        content: "";
        height: 50px;
        width: 46%;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.backgroundColor};
        position: absolute;
        bottom: 0px;
    }

    .nav-btns .nav-btn {
        background-color: #adadad;
        color: #313131;
        border: none;
        border-radius: 5px;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 50px;
        font-size: 18px;
        transition: 0.2s;
    }

    .nav-btns .nav-btn:hover {
        background-color: #30a7d7;
    }

    .nav-btns .nav-btn img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #eeeeee
    }

    .nav-btns .prev-btn {
        margin-right: 2.5px;
        padding-left: 15%;
        justify-content: flex-start;
    }

    .nav-btns .prev-btn::before {
        content: "";
        height: 51px;
        width: 80px;
        background-image: ${({theme}) => theme === themes.light ? `url(${leftLightBlank})` : `url(${leftDarkBlank})`};
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0px;
        left: 21%;
    }
    
    .prev-btn span:first-of-type, .next-btn span:last-of-type {
        margin: 20px;
    }

    .nav-btns .next-btn {
        margin-left: 2.5px;
        padding-right: 15%;
        justify-content: flex-end;
    }

    .nav-btns .next-btn::after {
        content: "";
        height: 51px;
        width: 80px;
        background-image: ${({theme}) => theme === themes.light ? `url(${rightLightBlank})` : `url(${rightDarkBlank})`};
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0px;
        right: 21%;
    }

    .nav-btns .next-btn img {
        transform: rotate(180deg);
    }

    .pokemon-name {
        grid-area: name;
        padding: 20px;
        width: 300px;
        position: absolute; 
        left: 0;
        right: 0;
        top: -70px;
        margin: 0 auto;
    }

    .pokemon-name h1 {
        color: #646464;
        font-size: 32px;
        text-align: center;
    }

    .pokemon-name h1 span {
        color: ${({ theme }) => theme.color};
    }




    .images {
        grid-area: images;
        margin-left: 20px;
        border-radius: 10px;
        width: 500px;
        height: 600px;
    }

    .images h2 {
        margin-bottom: 10px;
        font-size: 30px;
        text-align: center;
    }

    .images img {
        width: 250px;
        background-color: #dededede;
    }




    .infos-container {
        grid-area: infos;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 25px;
    }
    
    .info-chart {
        color: #fff;
        width: 85%;
        background-color: #30a7d7;
        border-radius: 10px;
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
        background-color: #4dad5b;
        width: 85%;
        margin-top: 25px;
        padding: 20px;
        border-radius: 10px;
    }
    
    .types h3 {
        margin-bottom: 15px;
        font-size: 24px;
        color: #fff;
    }

    .types ul {
        display: flex;
    }



    
    .moves {
        color: #fff;
        grid-area: moves;
        background-color: #E6BC2F;
        width: 90%;
        margin: 50px auto;
        padding: 20px;
        border-radius: 10px;
    }

    .moves h2, .moves p{
        margin-bottom: 10px;
    }

    .moves ul {
        display: flex;
        flex-wrap: wrap;
    }

    .moves ul li {
        background: url(${pokeballListIcon}) no-repeat left center;
        padding-left: 24px;
        height: 24px;
        font-size: 16px;
        flex: 1 1 300px;
    }


    @media (max-width: 1500px) {
        .nav-btns::after {
            width: 43%;
        }
    }


    @media (max-width: 1200px) {
        .nav-btns::after {
            width: 40%;
        }
    }
    

    @media (max-width: 1000px) {
        .nav-btns::after {
            width: 37%;
        }
    }

    @media (max-width: 450px) {
        .nav-btns::after, .nav-btns .prev-btn::before, .nav-btns .next-btn::after {
            display: none;
        }

        .main {
            width: 100vw;
            padding: 0;
            grid: 
                "btns" 100px
                "name" 75px
                "images" auto
                "infos" auto
                "moves" auto / 1fr;
        }

        .nav-btns {
            width: 100vw;
        }

        .nav-btns .nav-btn {
            width: 200px;
            height: 100%;
            padding: 10px;
        }

        .prev-btn span:first-of-type,.next-btn span:last-of-type {
            margin: 10px;
        }

        .pokemon-name {
            width: 100%;
            height: fit-content;
            position: static;
            padding: 5px;
        }

        .images {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0;
        }

        .images img {
            margin: 0 auto;
        }
    }
`