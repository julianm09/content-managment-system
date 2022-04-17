import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Button({ handleClick, text = "button" }) {
  return <ButtonCont onClick={handleClick}>{text}</ButtonCont>;
}

const ButtonCont = styled.div`
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
