import reset from "styled-reset";
import Router from "./router";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, darkTheme } from "./theme";
import { useRecoilState } from "recoil";
import { selectTheme } from "./atoms/theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: ${(props) => props.theme.bgColor};
    }

`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;

const ScreenMode = styled.button`
    padding: 8px;
`;

function App() {
    const [isLight, setIsLight] = useRecoilState(selectTheme);

    const handleClick = () => {
        setIsLight((prev) => !prev);
    };

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header>
                <ScreenMode onClick={handleClick}>{isLight ? "light" : "dark"}</ScreenMode>
            </Header>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
    );
}

export default App;
