import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    padding-top: 125px;
    background-color: rgb(249, 249, 249);

    .errors-container {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: rgb(249, 249, 249);

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgb(217, 221, 232);
        color: rgba(12, 40, 52, 0.4);
        font-size: 16px;
        padding-bottom: 10px;
        margin-bottom: 45px;

        ::placeholder {
            color: rgba(12, 40, 52, 0.4);
        }
    }

    p {
        cursor: pointer;
        color: rgb(12, 40, 52);
        font-size: 14px;
        margin-top: -30px;
        margin-bottom: 50px;
    }
`

export const ConnectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 125px;
    width: 90%;

    .separator {
        display: flex;
        align-items: center;

        p {
            margin: 0px 10px;
            color: rgba(12, 40, 52, 0.4);
            font-size: 14px;
        }

        .short-line {
            width: 80px;
            height: 1px;
            background-color: rgb(217, 221, 232);
        }
    }

    .buttons-container {
        display: flex;
        width: 100%;

        button:first-child {
            color: rgb(221, 95, 95);
            border: 1px solid rgb(221, 95, 95);
            margin-right: 10px;
        }
    }

    button {
        background-color: transparent;
        height: 50px;
        padding: 10px 25px;
        cursor: pointer;
        width: 100%;
        font-weight: 600;
        margin-top: 40px;
    }

    button:last-child {
        color: rgb(64, 90, 147);
        border: 1px solid rgb(64, 90, 147);
    }
`