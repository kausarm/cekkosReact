import React from 'react'
import 'elements/MiniCard/index.scss'


export default function index(props) {
    return (
      <div className="container mini-card-wrapper">
        <div className="row">
          <div className="col">
            <img
              src={props.img}
              alt="fitur untuk menemukan kos yang tepat sesuai keinginan anda"
            />
          </div>
          <div className="col mt-1">
            <h2 className="title">{props.title}</h2>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col ">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    );
}
