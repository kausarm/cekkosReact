import React from 'react';
import propTypes from "prop-types";
import 'elements/Label/index.scss'

export default function Label(props) {
  const className = [props.className];

  if(props.labelName === "Putri") className.push("bg-secondary");
  
  props.isSmall
    ? className.push("small label-wrapper")
    : className.push("");
  
  props.isPriceLabel
    ? className.push("price-label text-nowrap")
    : className.push("");

  props.isPrimary
    ? className.push("label-wrapper bg-primary")
    : className.push("");

  return (
    <div
      className={className.join(" ")}
      style={
        props.isPrimary
          ? { borderRadius: "16px", fontSize: "12px", color: "#F5F5F5" }
          : {
             
            }
      }
    >
      {props.labelName}
    </div>
  );
}

Label.propTypes = {
    isPrimary: propTypes.bool,
    isPriceLabel:propTypes.bool,
    isSmall: propTypes.bool
}
