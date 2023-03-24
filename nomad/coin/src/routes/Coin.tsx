import { useParams } from "react-router-dom";
import styled from "styled-components";

interface Params {
    coinId: string
}

const Title = styled.h1`
    color: ${(props) => props.theme.btncolor}
`;

const Coin = () => {
    const {coinId} = useParams<Params>();

    return(<Title>Coin {coinId}</Title>);
}

export default Coin;