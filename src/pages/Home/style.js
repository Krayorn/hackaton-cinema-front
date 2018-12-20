import styled from 'styled-components'

export const Laureate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const LaureateMovie = styled.div`
    width: 100%;
    height: 260px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${({Background}) => {
        return Background
    }});
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span.title {
        max-width: 90%;
        font-size: 45px;
        font-family: 'Playfair Display', serif;
        line-height: 60px;
        text-align: center;
        color: white;
        margin-bottom: 10px;
    }
`

export const Banner = styled.div`
    position: absolute;
    top: 20px;
    left: 0;
    background-color: white;
    padding: 3px 10px 3px 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase

    b {
        font-weight: 600;
    }
`

export const CustomLink = styled.div`
    padding: 13px 28px;
    color: white;
    border: 1px solid white;
    font-size: 18px;
`

export const LaureateInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
export const LaureateText = styled.div`
    width: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    color: rgb(12, 40, 52);

    span.title {
        font-size: 24px;
        line-height: 32px;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
    }

    span.director {
        font-size: 18px;
    }
`
export const LaureateNote = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid ${({color}) => {
        return color
    }};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgb(12, 40, 52);
`

export const Nominees = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    background-color: rgb(249,249,249);
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

export const Social = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${({Background}) => {
        return Background
    }});
    background-size: cover;
    background-repeat: no-repeat;

    img.twitter {
        width: 90%;
        position: relative;
        top: 60px;
    }
`

export const SocialText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 40px;
    margin-bottom: 10px;

    span {    
        color: white;
        max-width: 80%;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        font-weight: 600;
    }

    span:nth-child(2) {
        font-size: 50px;
        font-family: 'Playfair Display', serif;
        margin: 25px 0;
    }
`

export const Newsletter = styled.div`
    padding: 80px 20px 40px;
    display: flex;
    flex-direction: column;

    img.logo {
        width: 50px;
        margin-bottom: 20px;
    }

    span.title {
        font-size: 24px;
        line-height: 32px;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        margin-bottom: 20px;
    }

    span.CGU {
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: rgba(12, 40, 52, .4);
        text-align: center;
    }
`

export const NewsForm = styled.div`
    width: 100%;
    display: flex;

    input {
        width: calc(100% - 62px);
        border: 1px solid rgb(217, 221, 232);
        border-right: 0;
        margin-bottom: 10px;
        padding-left: 10px;
        height: 50px;

        &::placeholder {
            color: rgba(12, 40, 52, .4);
        }
    }
`

export const FakeButton = styled.div`
    width: 62px;
    height: 50px;
    background-color: rgb(221, 95, 95);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`