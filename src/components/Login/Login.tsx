import axios from "axios";
import { useCallback, useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3000/auth/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(() => {
        setCurrentUser(username);
      })
      .catch((err) => alert(err));
    event.preventDefault();
  };

  const handleLogout = useCallback(() => {
    setCurrentUser(undefined);
  }, [currentUser]);

  if (currentUser)
    return (
      <>
        <GreetingMessage>Hi {currentUser}</GreetingMessage>
        <LoginButton type="submit" onClick={handleLogout}>
          Logout
        </LoginButton>
      </>
    );

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <DataWrapper>
            <DataSection>
              <label htmlFor="username">Username:</label>
              <LoginInput
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
            </DataSection>
            <DataSection>
              <label htmlFor="password">Password:</label>
              <LoginInput
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </DataSection>
          </DataWrapper>
          <LoginButton type="submit">Login</LoginButton>
        </FormWrapper>
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: flex-end;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const DataSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px 0;
  justify-content: space-between;
`;

const LoginInput = styled.input`
  border: 2px solid orange;
  margin-left: 5px;
`;

const LoginButton = styled.button`
  height: 27px;
  align-self: center;
  background-color: white;
  border: 2px solid orange;
  cursor: pointer;
`;

const GreetingMessage = styled.span`
  font-weight: bold;
  color: white;
  margin-right: 15px;
`;
