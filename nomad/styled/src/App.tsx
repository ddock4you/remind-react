import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Box = styled.div<{ bgColor: string }>`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

const Input = styled.input.attrs({ type: "text" })<{ t?: string }>`
    background-color: "tomato";
`;

function App() {
    return (
        <Container>
            <Box as="p" bgColor="tomato" />
            <Box bgColor="gold" />
            <Circle bgColor="lightblue" />
            <Input t="password" />
            <Input />
            <Input />
        </Container>
    );
}

export default App;
