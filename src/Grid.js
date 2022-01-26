import React from 'react';
import Box from './Box';

export default function Grid({ gridSize, color }) {
  return (
    <table>
      <tbody>
        {[...Array(parseInt(gridSize))].map((element, index) => (
          <tr key={index}>
            {[...Array(parseInt(gridSize))].map((element, index) => (
              <Box color={color} key={index} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
