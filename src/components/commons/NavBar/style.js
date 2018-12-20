import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Header = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid #D9DDE8;
`

export const LogoLink = styled(Link)`
    img.logo {
        height: 40px; 
    }

    img.small-logo {
        height: 25px; 
    }
`

export const Burger = styled.div`
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        width: 100%;
        height: 5px;
        background-color: #0C2834;
        border-radius: 2px;
    }
`

export const Menu = styled.div`
    position: absolute;
    top: 0;
    left: -100%; /* TODO: Mettre à 0 pour ouvrir, 100% pour fermer */
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: all .3s ease-in-out;
`

export const TopMenu = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Item = styled(Link)`
    padding: 15px 20px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;

    &:after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f054";
        position: absolute;
        top: calc(50% - 5px);
        right: 20px;
        color: rgba(12, 40, 52, .4);
        font-size: 10px;
    }
`

export const CloseMenu = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        width: 100%;
        height: 4px;
        background-color: #0C2834;
        border-radius: 2px;
        transform-origin: -5% 50%;
    }

    span:nth-child(1) {
        transform: rotate(45deg)
    }

    span:nth-child(2) {
        transform: rotate(-45deg)
    }
`

export const CTA = styled(Link)`
    height: 50px;
    margin: 10px 20px;
    background-color: #DD5F5F;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
    text-decoration: none;
`

export const Logout = styled.div`
    position: absolute;
    left: 20px;
    bottom: 30px;
    color: #DD5F5F

    i {
        color: #DD5F5F;
        margin-left: 10px;
        position: relative;
        top: 1px;
    }
`
