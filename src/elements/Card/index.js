import React from 'react'
// import 'elements/Card/index.scss'
import Gambar1 from 'assets/icons/card/places/1.png'
import Star from 'assets/icons/card/Star.png'
import Label from 'elements/Label/Label'
import Isize from 'assets/icons/card/Isize.png'
import Idrop from "assets/icons/card/Idrop.png";
import screen from "assets/icons/card/screen.png";
import { Link } from 'react-router-dom'

export default function index(props) {
    return (
      <div className="row">
        <Link
          to={props.redirect}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <div className="img-wrapper">
              <Label isSmall labelName="Baru" className="label-type" />
              <img src={Gambar1} className="card-img-top" alt="Kos hino kana" />
            </div>
            <div className="row">
              <div className="col">
                <h5 className="card-title text-nowrap">{props.cardTitle}</h5>
              </div>
              <div className="col text-end mt-2">
                <img
                  src={Star}
                  className="me-1"
                  alt="star icon"
                  width="16"
                  height="16"
                />
                4.4
              </div>
            </div>
            <Label isPrimary labelName={props.labelName} />
            <div className="row features">
              <div className="col text-nowrap">
                <img
                  src={Isize}
                  className="me-2"
                  alt="icon ukuran kos"
                  width="14"
                  height="14"
                />
                {props.placeSize}
              </div>
              <div className="col">
                <img
                  src={Idrop}
                  className="me-2"
                  alt="icon untuk AC"
                  width="14"
                  height="14"
                />
                AC
              </div>
              <div className="col">
                <img
                  src={screen}
                  className="me-2"
                  alt="icon untuk tv"
                  width="14"
                  height="14"
                />
                TV
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Label isPriceLabel labelName="Rp 1.000.000 / Bulan" />
            </div>
          </div>
        </Link>
      </div>
    );
}
