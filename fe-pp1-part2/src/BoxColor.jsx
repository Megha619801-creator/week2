import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  const toHex = (value) => value.toString(16).padStart(2, '0');
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: '20px',
    margin: '10px 0',
    textAlign: 'center',
    color: (r * 0.299 + g * 0.587 + b * 0.114 > 186) ? 'black' : 'white',
    border: '2px solid black',
    width: '270px',
  };

  return (
    <div style={boxStyle}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
