import React from 'react';
import './Grid.scss';
import Box from '../Box/Box.js'
class Grid extends React.Component {
    render() { 
        let row = 30;
        let column = 30;
        let grid = new Array(row);
        for(let i=0; i<row; i++) {
            grid[i] = new Array(column)
        }
        console.log('grid', grid);
        for(let i=0; i<row; i++) {
            for(let j=0; j<column; j++) {
                grid[i][j] = {
                    row : i+1,
                    column : j+1
                }
            }
        }
        

        return ( <div className='grid'>
            {
                grid.map(row => (
                    <div className='array'>
                        {
                            row.map(box => <Box {...box} />)
                        }
                    </div>))
            }
        </div> );
    }
}
 
export default Grid;