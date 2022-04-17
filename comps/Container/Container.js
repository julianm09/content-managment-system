import styled from "styled-components";

export default function Container(props) {
  return <Cont>{props.children}</Cont>;
}

const Cont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  height: calc(100vh - 100px);
`;
