import { Route, Routes } from 'react-router-dom'
import CardsList from '../components/cardslist'

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<CardsList />}/>
        </Routes>
    )
}

export { AppRoutes }