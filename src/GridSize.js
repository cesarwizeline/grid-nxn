import React from 'react';

const GridSize = ({ gridSize, gridSizeHandler }) => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <select
      onChange={(e) => {
        gridSizeHandler(e.target.value);
      }}
      defaultValue={gridSize}
    >
      {values.map((val, index) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};

export default GridSize;
