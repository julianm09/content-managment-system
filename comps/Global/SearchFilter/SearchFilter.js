import styled from "styled-components";
import { useUser } from "../../../utils/provider";

export default function SearchFilter({ }) {
  return (
    <Cont>
      <Filter/>
      <Button>Filter</Button>
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
`;

const Filter = styled.input`
  height: 40px;
  cursor: pointer;
  padding: 0 20px;
  background: white;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;

  &:hover {
    background: grey;
    color: white;
  }
`;

const Button = styled.div`
  height: 40px;
  cursor: pointer;
  padding: 0 20px;
  background: white;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: grey;
    color: white;
  }
`;
