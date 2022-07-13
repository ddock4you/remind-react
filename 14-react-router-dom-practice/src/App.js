import { Redirect, Route, Switch } from "react-router-dom";
import "./components/layout/Layout.module.css";
import Nothing from "./components/pages/Nothing";
import QuotesDetail from "./components/pages/QuotesDetail";
import Quotes from "./components/pages/Quotes";
import NewQuote from "./components/pages/NewQuote";
import Layout from "./components/layout/Layout";

// page not found 페이지 필요
// Route to="*"

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/nothing" />
                </Route>

                <Route path="/quotes" exact>
                    <Quotes />
                </Route>
                <Route path="/quotes/:id">
                    <QuotesDetail />
                </Route>
                <Route path="/new_quote">
                    <NewQuote />
                </Route>
                <Route to="/nothing">
                    <Nothing />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
