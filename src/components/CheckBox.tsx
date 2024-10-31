import icCheck from "../assets/icCheck.svg";
import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: "pointer";
`;

const StyledCheckbox = styled.div<{
  checked: boolean;
}>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s, border-color 0.2s;
  background-color: ${(props) =>
    props.checked ? props.theme.colors.orange03 : "white"};
  border: 1px solid
    ${(props) =>
      props.checked ? props.theme.colors.orange03 : props.theme.colors.gray300};
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <CheckboxWrapper onClick={onToggle}>
      <StyledCheckbox checked={checked}>
        <img src={icCheck} />
      </StyledCheckbox>
    </CheckboxWrapper>
  );
};

export default Checkbox;
