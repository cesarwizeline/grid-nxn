import { useState } from 'react';
const useBoxes = () => {
  const [color, setColor] = useState('black');
  const [gridSize, setGridSize] = useState(5);
  const changeColorHandler = (color) => {
    setColor(color);
  };
  const gridSizeHandler = (sizeNumber) => {
    setGridSize(sizeNumber);
  };
  return { color, gridSize, changeColorHandler, gridSizeHandler };
};
export default useBoxes;
