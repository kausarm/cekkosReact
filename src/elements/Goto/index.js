import React from 'react'
import 'elements/Goto/index.scss'
import { Link } from 'react-router-dom'

export default function index(props) {
    return (
      <div>
        <Link className="link-to d-flex justify-content-end " to="SemuaKos">
          {props.link} <img src={props.img} className="ms-1" alt={props.link} />
        </Link>
      </div>
    );
}
