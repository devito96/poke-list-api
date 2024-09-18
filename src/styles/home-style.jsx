import styled from "styled-components"
import bgImg from "../assets/images/container-bg.png"

export const Container = styled.div` 
    & {
        background-image: url(${bgImg});
        background-color: ${({ theme }) => theme.secondaryBackgroundColor};
    }

    .main {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
        width: 85%;
        margin: 0 auto;
    }

    .title {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin: 0 auto;
    }

    .title h1 {
        color: #ffffff;
        font-size: 24px;
        height: 100%;
        padding: 25px;
        border-radius: 10px;
        background-color: #4dad5b;
    }

    .title .btns-container {
        display: flex;
        justify-content: space-between;
        width: 150px;
    }

    .title .btns-container .btn {
        color: #fff;
        text-align: center;
        width: 75px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: 0.3s; 
    }

    .title .btns-container .filter {
        background-color: #30a7d7;
    }

    .title .filter:hover {
        transform: scale(1.02);
    }
    
    .divider {
        display: block;
        content: '';
        background-color: #cccccc;
        width: 90%;
        height: 2px;
        margin: 0 auto 30px;
    }

    .show-more {
        display: flex;
        justify-content: center;
        padding: 50px;
    }

    .show-more button {
        background-color: #ea632b;
        color: #fff;
        font-size: 20px;
        width: 300px;
        height: 75px;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    @media (max-width: 450px) {
        .title {
            flex-direction: column;
        }

        .title h1 {
            margin-bottom: 30px;
        }

        .title .btns-container {
            width: 100%;
            justify-content: space-around;
        }

        .title .btns-container .btn {
            width: 60px;
            font-size: 12px;
        }
    }
`
