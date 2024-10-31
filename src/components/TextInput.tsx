import React, { InputHTMLAttributes } from "react";

import icCancel from "../assets/icCancel.svg";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: boolean;
  value: string;
  onClear?: () => void;
  disabled?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.gray600};
  font-size: ${(props) => props.theme.text.t2rg18.fontSize};
  font-weight: ${(props) => props.theme.text.t2rg18.fontWeight};
  line-height: ${(props) => props.theme.text.t2rg18.lineHeight};
`;

const HelperText = styled.span<{ error?: boolean }>`
  color: ${(props) =>
    props.error ? props.theme.colors.redStrong : props.theme.colors.gray600};
  font-size: ${(props) => props.theme.text.t2rg18.fontSize};
  font-weight: ${(props) => props.theme.text.t2rg18.fontWeight};
  line-height: ${(props) => props.theme.text.t2rg18.lineHeight};
`;

const InputWrapper = styled.div<{
  focused: boolean;
  error?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.error
        ? props.theme.colors.redStrong
        : props.focused
        ? props.theme.colors.orange03
        : props.theme.colors.gray50};
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.gray50 : props.theme.colors.gray200};
  padding: 12px;
  border-radius: 12px;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => !props.disabled && props.theme.colors.orange03};
  }
`;

const StyledInput = styled.input<{ disabled?: boolean }>`
  flex: 1;
  font-size: 16px;
  border: none;
  background: transparent;
  color: ${(props) =>
    props.disabled ? props.theme.colors.gray200 : props.theme.colors.gray950};
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray600};
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray600};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-left: 8px;
  border-radius: 50%;
`;

const TextInput = ({
  label,
  helperText,
  error = false,
  value,
  onClear,
  disabled = false,
  ...props
}: InputProps) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper focused={focused} error={error} disabled={disabled}>
        <StyledInput
          {...props}
          value={value}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {value && onClear && !disabled && (
          <ClearButton onClick={onClear} aria-label="Clear input">
            <img src={icCancel} />
          </ClearButton>
        )}
      </InputWrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};

export default TextInput;
