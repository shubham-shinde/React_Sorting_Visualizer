import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './AlgorithmList.scss';

class AlgorithmList extends React.Component {
  render() { 
    const {sorting, algo}=this.props.list; 
    return (
      <div className="algorithmlist"> 
        <div className="buttons">
          <li >
            <button 
              className={`offset ${sorting && (algo==='Bubble'  ? `active`: `inactive`)}`}
              onClick={this.props.actions.start_bubble_sort} 
            >Bubble Sort</button>
          </li>
          <li >
            <button 
              className={`offset ${sorting && (algo==='Selection'  ? `active`: `inactive`)}`}
              onClick={this.props.actions.selection_sort}
            >Selection Sort</button>
          </li>
          <li>
            <button 
              className={`offset ${sorting && (algo==='Quick'  ? `active`: `inactive`)}`}
              onClick={this.props.actions.quick_sort}
            >Quick Sort</button>
          </li>
          <li>
            <button 
              className={`offset ${sorting && (algo==='Merge'  ? `active`: `inactive`)}`}
              onClick={this.props.actions.merge_sort} 
            >Merge Sort</button>
          </li>
          <li>
            <button
              className={`offset ${sorting && (algo==='Insertion'  ? `active`: `inactive`)}`}
              onClick={this.props.actions.insertion_sort}
            >Insertion Sort </button>
          </li>
          <li>
            <button 
              className={`offset ${sorting && (algo==='Try'  ? `active`: `inactive`)}`}
              onClick={this.props.actions.try_me} 
            >Try me</button>
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