import styled from "styled-components";

export default function Title({ text = "Plants", style }) {
  return <Cont style={style}>{text}</Cont>;
}

const Cont = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
