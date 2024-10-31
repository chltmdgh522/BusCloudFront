import { Link, useLocation } from "react-router-dom";

import icHomeActive from "../assets/icHomeActive.svg";
import icHomeGray from "../assets/icHomeGray.svg";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 40px;
  width: 100%;
`;

const NavItem = styled.li<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) =>
    props.active ? props.theme.colors.orange03 : props.theme.colors.gray500};
  font-size: ${(props) => props.theme.text.t2md18.fontSize};
  font-weight: ${(props) => props.theme.text.t2md18.fontWeight};
  line-height: ${(props) => props.theme.text.t2md18.lineHeight};
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    font-size: 24px;
    margin-bottom: 4px;
  }
`;

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <Nav>
      <NavList>
        <NavItem active={isHome}>
          <Link to="/home">
            <img src={isHome ? icHomeActive : icHomeGray} />
            <span>홈</span>
          </Link>
        </NavItem>
        <NavItem active={!isHome}>
          <Link to="/favorite">
            <img src={isHome ? icHomeGray : icHomeActive} />
            <span>즐겨찾기</span>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
