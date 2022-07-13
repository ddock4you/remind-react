import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
    // react-router-dom -> Prompt 사용
    const history = useHistory();

    const addQuoteHandler = ({ author, text }) => {
        console.log({ author, text });

        history.push("/quotes");
    };

    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
