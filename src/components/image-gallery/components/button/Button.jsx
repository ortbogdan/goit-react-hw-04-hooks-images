import React from "react";
import { LoadMoreButton } from "./Button.styled";
export const Button = ({ onClick, children }) => {
      return (<LoadMoreButton type="button" onClick={onClick}>{children}</LoadMoreButton>)
}