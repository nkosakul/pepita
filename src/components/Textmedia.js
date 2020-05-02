import React from 'react';

const Textmedia = ({ props }) => (
  <div className="textmedia">{props.title && <h1>{props.title}</h1>}</div>
);

export default Textmedia;
