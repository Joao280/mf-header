import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Login from "../Login/Login";

const NavBar = () => {
  return (
    <Nav>
      <BoxWrapper>
        <NavbarLayout>
          <Link to="/">
            <Logo>
              <img src={logo} width="60" alt="logo" />
            </Logo>
          </Link>
          <LinkWrapper>
            <StyledNavbarLink to="/">Home</StyledNavbarLink>
            <StyledNavbarLink to="/continents">Continents</StyledNavbarLink>
          </LinkWrapper>
          <LoginWrapper>
            <Login />
          </LoginWrapper>
        </NavbarLayout>
      </BoxWrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: BlueViolet;
  height: 70px;
`;

const BoxWrapper = styled.div`
  max-width: 1280px;
  min-height: 100%;
  margin: 0 auto;
`;

const NavbarLayout = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  color: white;
  margin-left: 200px;
`;

const StyledNavbarLink = styled(Link)`
  position: relative;
  color: white;
  font-size: 1.25rem;
  margin-right: 50px;
  text-decoration: none;
  &:after {
    content: " ";
    transition: opacity 200ms;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15%;
    opacity: 0;
    height: 3px;
    width: 100%;
    background-color: #ff914d;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

const LoginWrapper = styled(LinkWrapper)`
  justify-content: flex-end;
  margin-left: 0;
`;

export default NavBar;
