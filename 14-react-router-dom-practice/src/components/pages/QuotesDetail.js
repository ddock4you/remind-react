import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";

const QuotesDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    console.log(match);

    // id별 quotes_detail 제목, 내용 더미 필요

    return (
        <>
            <h1>quotes_detail</h1>
            <p>{params.id}</p>
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuotesDetail;
