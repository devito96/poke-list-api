import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes'
import { Header } from './components/header'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Flexo Medium', sans-serif;
  }

  a {
    color: #000;
  }
`


export default App
