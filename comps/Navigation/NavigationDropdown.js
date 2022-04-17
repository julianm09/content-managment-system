import styled from "styled-components";
import { useState } from "react";

export default function NavigationDropdown({ dropdown, display, setDisplay }) {
  const [active, setActive] = useState(false);

  const handleDropdown = () => {
    setDisplay({ name: dropdown.name, category: dropdown.dropdown[0] });
  };

  const handleDropdownInner = (inner) => {
    setDisplay({ name: dropdown.name, category: inner });
  };

  return (
    <Cont>
      <Dropdown
        active={dropdown.name === display.name && true}
        onClick={() => handleDropdown()}
      >
        {dropdown.name}
      </Dropdown>
      {dropdown.name === display.name ? (
        dropdown.dropdown.map((dropdown) => (
          <DropdownInner
            active={dropdown === display.category && true}
            onClick={() => handleDropdownInner(dropdown)}
          >
            {dropdown}
          </DropdownInner>
        ))
      ) : (
        <></>
      )}
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

const Dropdown = styled.div`
  height: 50px;
  width: 100%;
  background: ${(props) => (props.active ? "#d13333" : "#ebebeb")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 50px;
  color: ${(props) => (props.active ? "#ffffff" : "#707070")};

  &:hover {
    background: #d13333;
    color: white;
    cursor: pointer;
  }
`;

const DropdownInner = styled.div`
  height: 50px;
  width: 100%;
  background: #8b3d3d;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 50px;
  color: #ffffff;
  font-weight: ${(props) => (props.active ? 700 : 400)};

  &:hover {
    background: #d13333;
    color: white;
    cursor: pointer;
  }
`;
