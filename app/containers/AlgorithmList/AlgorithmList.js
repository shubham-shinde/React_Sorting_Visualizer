import React from 'react'
import './AlgorithmList.scss'

class AlgorithmList extends React.Component {
    state = {  }
    render() { 
        return ( <div className="algorithmlist">
                <div>
                    <h1>Algorithm</h1>
                    <hr></hr>
                </div>
                <div>
                    <li><a>BubbleSort</a></li>
                    <li><a>SelectionSort</a></li>
                    <li><a>QuickSort</a></li>
                    <li><a>MergeSort</a></li>
                    <li><a>InsertionSort</a></li>
                </div>
        </div> );
    }
}
 
export default AlgorithmList;