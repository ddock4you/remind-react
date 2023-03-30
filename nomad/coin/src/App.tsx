import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./router";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </>
    );
}

export default App;
