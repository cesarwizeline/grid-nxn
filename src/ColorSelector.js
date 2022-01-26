import React from 'react';
const ColorSelector = ({ colorSelected, changeColorHandler }) => {
  const colors = ['black', 'blue', 'green'];
  return (
    <table>
      <tbody>
        <tr>
          {colors.map((color, index) => (
            <td
              key={index}
              style={{
                backgroundColor: color,
                padding: '15px',
                width: '15px',
                height: '15px',
                border: colorSelected === color ? '2px solid yellow' : 'none',
              }}
              onClick={() => changeColorHandler(color)}
            >
              {color}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ColorSelector;
