import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        font-size: 32px;
        font-weight: normal;

        margin: 0;
    }

    h2 {
        font-size: 24px;
        font-weight: normal;

        margin: 0;
    }

    p {
        font-size: 16px;
    }

    input {
        font-family: 'Roboto', sans-serif;
    }

    button {
        font-family: 'Roboto', sans-serif;
        outline: 0;
        border: 0;
        border-color: transparent;

        display: flex;
        align-items: center;
    
        &:hover {
            cursor: pointer;
        }
    }
`

export default GlobalStyle