import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        --clr-primary: ${({theme}) => theme.colors.primary};
        --clr-primary-light: ${({theme}) => theme.colors.primaryLight};
        --clr-secondary: ${({theme}) => theme.colors.secondary};
        --clr-secondary-light: ${({theme}) => theme.colors.secondaryLight};
        --clr-accent: ${({theme}) => theme.colors.accent};
        font-size: 62.5%;
    }

    body {
        font-family: 'Merriweather', sans-serif;
        box-sizing: border-box;
        background-color: var(--clr-secondary);
    }

    button {
        font-family: 'Merriweather', sans-serif;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;