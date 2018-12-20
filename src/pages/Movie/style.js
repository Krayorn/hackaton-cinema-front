import styled from 'styled-components'

export const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

export const PlayerButton = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: rgb(221, 95, 95);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(210deg);
    margin-right: 35px;
    margin-top: -25px;
    cursor: pointer;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding:0px 20px;
`

export const Triangle = styled.div`
    position: relative;
    background-color: white;
    text-align: left;
    margin-top: -10px;
    &:before,
    &:after {
        content: '';
        position: absolute;
        background-color: inherit;
    }
    &,
    &:before,
    &:after {
        width:  15px;
        height: 15px;
        border-top-right-radius: 30%;
    }

    & {
        transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
    }
    &:before {
        transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
    }
    &:after {
        transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
    }
`

export const Title = styled.h2`
    font-size: 24px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 5px;
`

export const From = styled.span`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 400;
`

export const Genre = styled.span`
    background-color: rgba(221, 95, 95, 0.1);
    color: rgb(221, 95, 95);
    padding: 10px;
    border-radius: 1px;
    width: fit-content;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
`

export const SubTitle = styled.h2`
    font-size: 14px;
    text-transform: uppercase;
    color: rgba(12, 40, 52, 0.4);
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 5px;
    letter-spacing: 1.4px;
`

export const Content = styled.div`
    font-size: 18px;
    font-weight: 400;
`
