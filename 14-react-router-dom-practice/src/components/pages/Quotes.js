import QuoteList from "../quotes/QuoteList";

// id={quote.id}
// author={quote.author}
// text={quote.text}

const DUMMY_LIST = [
    {
        id: "q1",
        author: "ysh",
        text: "great Quotes",
    },
    {
        id: "q2",
        auther: "jhr",
        text: "add a quote",
    },
];

const Quotes = () => {
    return <QuoteList quotes={DUMMY_LIST} />;
};

export default Quotes;
