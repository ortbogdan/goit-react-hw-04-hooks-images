import React from "react";
import PropTypes from "prop-types";
import { LoadMoreButton } from "./Button.styled";
export const Button = ({ onClick, children }) => {
      return (<LoadMoreButton type="button" onClick={()=>onClick()}>{children}</LoadMoreButton>)
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};