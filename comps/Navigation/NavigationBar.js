import { useState } from "react";
import styled from "styled-components";
import NavigationDropdown from "./NavigationDropdown";

export default function Navigation({ display, setDisplay }) {
  const dropdown = [
    { name: "Plants", dropdown: ["All Plants", "Add New", "Categories"] },
    { name: "Waypoints", dropdown: ["All Waypoints", "Add New", "Categories"] },
    { name: "Learn More", dropdown: ["All Learn More", "Add New"] },
    { name: "Users", dropdown: ["All Users", "Add New"] },
    { name: "Locations", dropdown: ["All Locations", "Add New"] },
    { name: "Media", dropdown: ["Images", "Video", "Audio"] },
    { name: "Tags", dropdown: ["All Tags", "Add New"] },
  ];

  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Cont showNav={showNav}>
        <Button onClick={() => setDisplay({ name: "Dashboard", category: "" })}>
          Dashboard
        </Button>
        {dropdown.map((dropdown) => (
          <NavigationDropdown
            dropdown={dropdown}
            display={display}
            setDisplay={setDisplay}
          />
        ))}
        <Button onClick={() => setDisplay({ name: "Profile", category: "" })}>
          Profile
        </Button>
        <Button onClick={() => setShowNav(false)}>Collapse</Button>
      </Cont>
      <ShowNav showNav={showNav} onClick={() => setShowNav(true)}>
        show nav
      </ShowNav>
    </>
  );
}

const Cont = styled.div`
  display: ${(props) => (props.showNav ? "flex" : "none")};
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 250px;
  position: relative;
  left: ${(props) => (props.showNav ? "0" : "-250px")};
  transition: 0.2s ease;
  top: 0;
  background: #ebebeb;
`;

const Button = styled.div`
  height: 50px;
  width: 100%;
  background: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 50px;
  color: #707070;

  &:hover {
    background: #d13333;
    color: white;
    cursor: pointer;
  }
`;

const ShowNav = styled.div`
  display: ${(props) => (props.showNav ? "none" : "flex")};
  height: 50px;
  width: 250px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #ebebeb;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  color: #707070;

  &:hover {
    background: #d13333;
    color: white;
    cursor: pointer;
  }
`;
