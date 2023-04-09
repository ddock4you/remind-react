import { createGlobalStyle, ThemeProvider } from "styled-components";
import Main from "./pages/Main";
import reset from "styled-reset";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main />
        </ThemeProvider>
    );
}

export default App;
