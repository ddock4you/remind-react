import { Route, useParams } from "react-router-dom";
import Comments from '../comments/Comments';

const QuotesDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>quotes_detail</h1>
            <p>{params.id}</p>
            <Route to={`/quotes/${params.id}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuotesDetail;
