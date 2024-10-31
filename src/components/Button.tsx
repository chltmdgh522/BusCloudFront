import styled from "styled-components";

const Btn = styled.button`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.text.body.fontSize};
  font-weight: ${(props) => props.theme.text.body.fontWeight};
  line-height: ${(props) => props.theme.text.body.lineHeight};
`;

const Button = () => {
  return <Btn>Click me!</Btn>;
};

export default Button;
