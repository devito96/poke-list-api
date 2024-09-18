import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-toggler"
import { FiSun, FiMoon } from "react-icons/fi"; 
import styled from "styled-components";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <Button 
        className="btn theme-toggler-btn" 
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} 
        theme={theme}>
            {
                theme === themes.light ? <FiMoon size={36} color="#2a2a2a"/> : <FiSun size={36}/>
            }
        </Button>
    )
}

const Button = styled.button`
    background: transparent;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.1);
    }

    &:active {
    transform: scale(0.8);
    }
`