import { useParams } from "react-router-dom";

const QuotesDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>quotes_detail</h1>
            <p>{params.id}</p>
        </>
    );
};

export default QuotesDetail;
