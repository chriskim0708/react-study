import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;

  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 1rem;

  & + & {
    margin-left: 1rem;
  }

  ${({ color, backgroundColor, theme }) => {
    const {
      palette: { blue, gray, pink }
    } = theme;
    return css`
      color: ${color || "white"};
      background: ${darken(0.1, pink || "black")};
    `;
  }}
`;

function StyledButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

export default StyledButton;
