import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid rgb(217, 221, 232);
    border-radius: 5px;
    overflow: hidden;
    text-decoration: none;

    img.picture {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
`

export const Infos = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 5px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
`

export const Director = styled.div`
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
    font-weight: 400;
`

export const FakeLink = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgba(12, 40, 52, .4);

    &:after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f054";
        color: rgb(217, 221, 232);
        font-size: 12px;
        position: relative;
        top: 1px;
        left: 5px;
    }
`