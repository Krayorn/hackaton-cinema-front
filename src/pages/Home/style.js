import styled from 'styled-components'

export const Nominees = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
`

export const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const Month = styled.div`
    display: flex;
    flex-direction: column;

    span:nth-child(1) {
        font-size: 14px;
        font-weight: 400;
        color: rgba(12,40,52,.4);
        text-transform: uppercase;
    }

    span:nth-child(2) {
        font-size: 20px;
        font-weight: 600;
        color: rgb(12,40,52);
    }
`

export const CTAvote = styled.div`
    padding: 15px 10px;
    background-color: #DD5F5F;
    color: white;
`

export const CTAnominees = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid #DD5F5F;
    color: #DD5F5F;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 20px 20px;
    background-color: rgb(12, 40, 52);
    color: white;

    i {
        font-size: 20px;
        color: white;
        align-self: center;
    }
`

export const AboutSubtitle = styled.div`
    font-size: 14px;
    color: rgba(255,255,255,.8);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.4px
`

export const AboutContent = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-bottom: 40px;
`