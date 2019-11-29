import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './AlgorithmList.scss';

class AlgorithmList extends React.Component {
  render() { 
    const {sorting}=this.props.list; 
    return (
      <div className="algorithmlist"> 
        <div className="buttons">
          <li >
            <button 
              onClick={!sorting && this.props.actions.start_bubble_sort} 
              className={`offset ${sorting ? `active`: `inactive`}`}
            >BubbleSort</button>
          </li>
          <li >
            <button 
              className="offset inactive"
              onClick={this.props.actions.selection_sort}
            >SelectionSort</button>
          </li>
          <li>
            <button className="offset inactive">Quick Sort</button>
          </li>
          <li>
            <button onClick={this.props.actions.merge_sort} className="offset inactive">Merge Sort</button>
          </li>
          <li>
            <button
              onClick={this.props.actions.insertion_sort}
              className="offset inactive"
            >InsertionSort </button>
          </li>
          <li>
            <button onClick={this.props.actions.try_me} className="offset">Try me</button>
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