import { Redirect, Route, Switch } from "react-router-dom";
import "./components/layout/Layout.module.css";
import Nothing from "./components/pages/Nothing";
import QuotesDetail from "./components/pages/QuotesDetail";
import Quotes from "./components/pages/Quotes";
import NewQuote from "./components/pages/NewQuote";

function App() {
    return (
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
    );
}

export default App;
