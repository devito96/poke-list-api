import { Card } from '../card'

import styled from 'styled-components'

const CardsList = ({ pokemons }) => {

    return (
        <Container>
            {pokemons.map((pokemon, index) => (
                <Card pokemon={pokemon} key={index} />
            ))}
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
       
`
export { CardsList }