import styled from "styled-components";
import { useUser } from "../../../utils/provider";

export default function Header({ handleSignout }) {
  const { user } = useUser();
  return (
    <Cont>
      <div>Indegeounous Plant Go</div>
      <UserCont>
        <div>{user.user_name}</div>
        <User>{user.user_name.slice(0, 1).toUpperCase()}</User>
        <Logout onClick={() => handleSignout()}>Logout</Logout>
      </UserCont>
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  min-height: 100px;
  padding: 0 50px;
  background: #ebebeb;
`;

const User = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 25px;
  background: #707070;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const UserCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Logout = styled.div`
  cursor: pointer;
`;