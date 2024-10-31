import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #4caf50;
  padding: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;
  }

  li a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>내 애플리케이션</Title>
      <Nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/favorite">즐겨찾기</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
