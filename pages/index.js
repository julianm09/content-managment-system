import styled from "styled-components";
import Dashboard from "../comps/Dashboard";
import Navigation from "../comps/Navigation/NavigationBar";
import { useState, useEffect } from "react";
import NavigationDisplay from "../comps/Navigation/NavigationDisplay";
import Login from "../comps/Login/Login";
import { useDisplay, useUser } from "../utils/provider";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import Header from "../comps/Global/Header/Header";

export default function Home() {
  const { display, setDisplay } = useDisplay();
  const { user, setUser } = useUser();

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
      console.log(JSON.parse(localUser));
    } else {
      return;
    }
  }, []);

  const handleSignOut = async (e) => {
    if (user) {
      signOut(auth)
        .then(() => {
          setUser(null);
          localStorage.clear();
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <>
      <Cont>
        {user ? (
          <>
            <Header handleSignout={handleSignOut} />
            <Display>
              <Navigation display={display} setDisplay={setDisplay} />
              <NavigationDisplay display={display} />
            </Display>
          </>
        ) : (
          <Login />
        )}
      </Cont>
    </>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Display = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
