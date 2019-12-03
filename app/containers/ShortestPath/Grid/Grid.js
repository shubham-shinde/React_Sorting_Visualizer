import React from 'react';
import './Grid.scss';
import Box from '../Box/Box.js'
class Grid extends React.Component {
    render() { 
        return ( <div className='grid'>
                    <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
                    <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
                    <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
                    <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
                    <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
        </div> );
    }
}
 
export default Grid;