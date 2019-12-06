import React from 'react';
import './Grid.scss';
import Box from '../Box/Box.js';
import '../ButtonBar1/ButtonBar1.js';

class Grid extends React.Component {
  render() {
    let row = 19;
    let column = 23;
    let grid = new Array(row);
    for (let i = 0; i < row; i++) {
      grid[i] = new Array(column);
    }
    console.log('grid', grid);
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        grid[i][j] = {
          row: i + 1,
          column: j + 1,
        };
      }
    }
    const start = { color: 'yellow', point: true };

    return (
      <div className="grid">
        {grid.map(row => (
          <div className="array">
            {row.map(box => (
                <Box {...box} {...start} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
