import styled from "styled-components";

interface SwitchProps {
  selected: boolean;
  onToggle: () => void;
}

const SwitchContainer = styled.div<{ selected: boolean }>`
  width: 48px;
  height: 30px;
  border-radius: 999px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.orange03 : props.theme.colors.gray300};
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  cursor: pointer;
`;

const SwitchCircle = styled.div<{ selected: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: ${(props) => props.theme.colors.gray50};
  transition: transform 0.2s;
  transform: ${(props) =>
    props.selected ? "translateX(16px)" : "translateX(0)"};
`;

const Switch = ({ selected, onToggle }: SwitchProps) => {
  return (
    <SwitchContainer selected={selected} onClick={onToggle}>
      <SwitchCircle selected={selected} />
    </SwitchContainer>
  );
};

export default Switch;
