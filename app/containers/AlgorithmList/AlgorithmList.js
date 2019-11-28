import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './AlgorithmList.scss';

class AlgorithmList extends React.Component {
  render() {
    return (
      <div className="algorithmlist">
        <div>
          <h1>Algorithms</h1>
        </div>
        <div>
<<<<<<< HEAD
          <li onClick={this.props.actions.randomize_array}>
            <button className="offset">BubbleSort</button>
=======
          <li onClick={this.props.actions.start_bubble_sort}>
            <a>BubbleSort</a>
>>>>>>> c936b3360e82e001eb3d6301298fd824f35e3a9c
          </li>
          <li>
            <button className="offset">SelectionSort</button>
          </li>
          <li>
            <button className="offset">QuickSort</button>
          </li>
          <li>
            <button className="offset">MergeSort</button>
          </li>
          <li>
            <button className="offset">InsertionSort </button>
          </li>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
    {
        list: state.list
    }
)

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(actions,dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmList);