import styled from "styled-components";
import "firebase/firestore";
import "firebase/auth";
import { auth } from "../../config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useServer, useUser } from "../../utils/provider";
import ax from "axios";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();

  const getUserById = async (user) => {
    try {
      const response = await ax.post(`http://localhost:3001/api/users`, {
        handler: "login",
        user_name: user.email,
        password: user.reloadUserInfo.passwordHash,
      });
      console.log(response.data.result.data[0]);
      setUser(response.data.result.data[0]);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.result.data[0])
      );
      setLoading(false);
    } catch (error) {
      console.log("error", error.response);
      return {
        error: error.response,
      };
    }
  };

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true);
        // Signed in
        const user = userCredential.user;
        // ...
        getUserById(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Cont>
        <Header>Welcome!</Header>

        <div style={{ margin: "15px 0" }}>
          <Text>Email</Text>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ margin: "15px 0" }}>
          <Data>Password</Data>
          <PasswordCont>
            <Inputpassword
              type={showPassword ? "" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ShowPass onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "hide" : "show"}
            </ShowPass>
          </PasswordCont>
        </div>
        <LoginDiv>
          <LoginBtn onClick={signIn}>Login</LoginBtn>
        </LoginDiv>
      </Cont>
    </>
  );
};

export default Login;

const Cont = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 999999;
`;

const Header = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin: 0 0 15px 0;
`;
const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #929292;
  margin: 0 0 15px 0;
`;
const Text = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #5e5e5e;
`;
const Input = styled.input`
  width: 378px;
  height: 52px;
  margin-top: 5px;
  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  outline: none;
  padding-left: 10px;
  color: #999;
`;
const Data = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #5e5e5e;
  top: 290px;
`;

const PasswordCont = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ShowPass = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #999;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const Inputpassword = styled.input`
  width: 378px;
  height: 52px;
  top: 319px;
  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  margin-top: 5px;
  outline: none;
  padding-left: 10px;
  color: #999;
`;
const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const LoginBtn = styled.button`
  width: 378px;
  height: 52px;
  background: #8b3d3d;
  border-radius: 10px;
  border: 0.5px solid #d13333;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin: 15px 0 5px 0;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  }
`;
