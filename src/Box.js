import React, { useState } from 'react';
const Box = ({ color }) => {
  const [newColor, setNewColor] = useState('black');
  const clickHandler = () => {
    setNewColor(color);
  };
  return (
    <>
      <td
        onClick={clickHandler}
        style={{
          backgroundColor: newColor,
          border: '1px solid gray',
          padding: '15px',
          width: '15px',
          height: '15px',
        }}
      ></td>
    </>
  );
};

export default Box;
