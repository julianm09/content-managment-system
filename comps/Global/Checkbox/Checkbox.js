import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Checkbox({ handleClick, active}) {
  return <CheckboxCont active={active} onClick={handleClick}></CheckboxCont>;
}

const CheckboxCont = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: ${props => props.active ? "#0088FF" : "white"};
  border: ${props => props.active ? "1px solid #0088FF" : "1px solid #707070"};;
  border-radius: 50%;
`;
