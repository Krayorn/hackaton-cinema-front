import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    max-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px 0;
    background-color: rgb(249, 249, 249);

    .vote-header {
        display: flex;
        flex-direction: column;
        padding: 0 20px;

        h3 {
            color: rgba(12, 40, 52, 0.4);
            letter-spacing: 1.4px;
            font-weight: 100;
            font-size: 14px;
            text-transform: uppercase;
        }
    
        h2 {
            font-size: 20px;
            font-weight: 600;
            color: rgb(12, 40, 52);
        }
    }

    .search-form {
        display: flex;
        height: 50px;
        margin-top: 20px;
        
        input {
            border: 1px solid rgb(217, 221, 232);
            background-color: white;
            padding: 5px 10px;
            width: 100%;
    
            ::placeholder {
                font-weight: 100;
                font-size: 18px;
                color: rgb(12, 40, 52);
            }
        }

        button {
            width: 62px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .movies-container {
        margin-top: 25px;

        .movie-info {
            display: flex;
            padding: 0 20px;
            margin-bottom: 25px;
            align-items: center;

            input {
                width: 30px;
                height: 30px;
            }

            p {
                color: rgb(12, 40, 52);
                font-size: 18px;
            }

            .chevron {
                margin-left: auto;
                width: 20px;
                
                ::before {
                    border-style: solid;
                    border-width: 0.25em 0.25em 0 0;
                    content: '';
                    display: inline-block;
                    height: 0.45em;
                    left: 0.15em;
                    position: relative;
                    top: 0.15em;
                    transform: rotate(-45deg);
                    vertical-align: top;
                    width: 0.45em;
                    color: rgb(213, 213, 216);
                }
            }

            .chevron-down:before {
                top: 0;
                transform: rotate(135deg);
            }
        }

        .separator {
            width: 100%;
            height: 1px;
            background-color: rgb(217, 221, 232);
        }

        form {
            padding: 0 20px;
            align-items: flex-start;
    
            label {
                font-weight: 100;
                color: rgb(12, 40, 52);
                font-size: 18px;
            }

            input {
                width: 100%;
            }

            label, input {
                margin-left: 0;
                margin-right: 0;
            }
        }

        + button {
            width: 100%;
        }
    }

    

`

