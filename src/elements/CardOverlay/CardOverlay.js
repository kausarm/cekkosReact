import React from 'react'
import propTypes from "prop-types";
import { Link } from 'react-router-dom';


export default function CardOverlay(props) {

let newHeight,lebar,tinggi,fw,fs,lh;
 if (props.isBig) {
   newHeight = "78px";
   lebar = "540px";
   tinggi = "462px";
   fw = "bold";
   fs = "42px";
   lh = "44px";
 }
 if (props.isSmall) {
   newHeight = "52px";
   lebar = "255px";
   tinggi = "219px";
   fw = "600";
   fs = "28px";
   lh = "32px";
 }
    let cardStyle = {
      backgroundImage: `url(${props.img})`,
      width: lebar,
      height: tinggi,
      borderRadius: "12px",
      position: "relative",
      backgroundPosition: "center",
    };

    let overlayStyle = {
      position: "absolute",
      borderRadius: "0px 0px 12px 12px",
      bottom: "-0",
      width: lebar,
      height: newHeight,
      background: "rgba(248, 159, 147, 0.8)",
      color: "#F5F5F5",
      fontWeight: fw,
      fontSize: fs,
      lineHeight: lh,
    };

    return (
      <Link>
        <div className="card-overlay-wrapper" style={cardStyle}>
          <div
            className="overlay-wrapper d-flex justify-content-center"
            style={overlayStyle}
          >
            <p className="mt-4 align-self-center">{props.city}</p>
          </div>
        </div>
      </Link>
    );
}

CardOverlay.propTypes = {
  isBig: propTypes.bool,
  isSmall: propTypes.bool,
};



