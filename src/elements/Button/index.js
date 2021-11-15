import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import 'elements/Button/index.scss'

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isBlock) className.push("btn-block");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");

  const onClick = () => {
    if (props.onclick) props.onClick();
  };

  if (props.isDisabled) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.children}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={
            props.target === "_blank" ? "noopener noreferrer" : undefined
          }
        >
          {props.children}
        </a>
      );
    } else {
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </Link>;
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onclick={onclick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isExternal: propTypes.bool,
  isBlock: propTypes.bool,
  isPrimary: propTypes.bool,
};
