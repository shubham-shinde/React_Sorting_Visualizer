import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './AlgorithmList.scss';

class AlgorithmList extends React.Component {
  render() {
    return (
      <div className="algorithmlist"> 
        <div className="buttons">
          <li onClick={this.props.actions.start_bubble_sort}>
            <button className="offset">BubbleSort</button>
          </li>
          <li onClick={this.props.actions.selection_sort}>
            <button className="offset">SelectionSort</button>
          </li>
          <li>
            <button className="offset">QuickSort</button>
          </li>
          <li>
            <button className="offset">MergeSort</button>
          </li>
          <li>
            <button onClick={this.props.actions.insertion_sort} className="offset">InsertionSort </button>
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