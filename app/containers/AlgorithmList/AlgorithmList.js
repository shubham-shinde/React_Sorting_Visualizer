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
          <li onClick={this.props.actions.randomize_array}>
            <a>BubbleSort</a>
          </li>
          <li>
            <a>SelectionSort</a>
          </li>
          <li>
            <a>QuickSort</a>
          </li>
          <li>
            <a>MergeSort</a>
          </li>
          <li>
            <a>InsertionSort</a>
          </li>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list
})

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(actions,dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmList);