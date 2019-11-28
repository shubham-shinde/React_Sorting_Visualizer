import React from 'react'
import Piller from '../Piller/Piller'
import './SortingBox.scss'
class SortingBox extends React.Component {
      
      
    render() {


        let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        // list.sort(() => {
        //     return Math.random() - 0.5;
        // })

        return ( 
        <div className="SortingBox">
            {list.map(i=>{
                return (
                    <Piller height={i} />
                )
            })
            }
                    
        </div> );
    }
}
 
export default SortingBox;