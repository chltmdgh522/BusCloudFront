import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  padding: 40px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const HomeLink = styled(Link)`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #45a049;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>페이지를 찾을 수 없습니다.</Message>
      <HomeLink to="/">홈으로 돌아가기</HomeLink>
    </Container>
  );
};

export default NotFound;
