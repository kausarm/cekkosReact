import React from 'react'

export default function index(props) {
    return (
      <div>
        <h1 className={`big-title ${props.color}`}>{props.title}</h1>
      </div>
    );
}
