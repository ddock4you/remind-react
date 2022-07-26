import { Route, Link, useParams } from "react-router-dom";
import Comments from "../comments/Comments";

const QuotesDetail = () => {
    const params = useParams();

    // id별 quotes_detail 제목, 내용 더미 필요

    return (
        <>
            <h1>quotes_detail</h1>
            <p>{params.id}</p>
            <Route path={`/quotes/${params.id}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.id}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.id}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuotesDetail;
