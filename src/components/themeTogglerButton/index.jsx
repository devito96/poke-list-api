import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-toggler"
import styled from "styled-components";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <Button className="btn theme-toggler-btn" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Change Themes</Button>
    )
}

const Button = styled.button`
    background-color: #4dad5b;
    
    &:hover {
        transform: scale(1.05);
    }
`