import React, { Component } from 'react'

import {
    Container,
    CTA,
    Item,
    FakeItem
} from './style'

class Footer extends Component {

    render() {
        return (
            <Container>
                <CTA to={'/vote'}>Votez pour le lauréat du mois</CTA>
                <Item to={'/'}>Home</Item>
                <Item to={'/'}>Nominés du mois</Item>
                <Item to={'/'}>À propos</Item>
                <Item to={'/profile'}>Mon compte</Item>

                <FakeItem>Cookies</FakeItem>
                <FakeItem>Confidentialité</FakeItem>
                <FakeItem>Conditions générales</FakeItem>
                <FakeItem>© 2018 Prix Brutus</FakeItem>
            </Container>
        )
    }
}

export default Footer
