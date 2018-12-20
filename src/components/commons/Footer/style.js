import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /*height: 90px;*/
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
    /*align-items: center;*/
    padding: 40px 20px 20px;
    background-color: #DD5F5F;
`

export const CTA = styled(Link)`
    height: 50px;
    color: #DD5F5F;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    background-color: white;
    text-decoration: none;
    margin-bottom: 40px;
`

export const Item = styled(Link)`
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    position: relative;
    color: rgba(255,255,255,.6);

    &:after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f054";
        position: absolute;
        top: calc(50% - 7px);
        right: 0;
        color: white;
        font-size: 14px;
    }
`

export const FakeItem = styled.div`
    margin-top: 30px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255,255,255,.6);
`
