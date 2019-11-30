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
              className={`offset tooltip ${sorting && (algo==='Bubble'  ? `active`: `inactive`)}`}
              onClick={() => (!sorting && this.props.actions.start_bubble_sort())} 
            >Bubble Sort <span className="text"> <a href='https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2'> See Algorithm</a></span></button>
          </li>
          <li >
            <button 
              className={`offset tooltip ${sorting && (algo==='Selection'  ? `active`: `inactive`)}`}
              onClick={() => (!sorting && this.props.actions.selection_sort())}
            >SelectionSort <span className="text"> <a href='https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513'> See Algorithm</a></span></button>
          </li>
          <li>
            <button 
              className={`offset tooltip ${sorting && (algo==='Quick'  ? `active`: `inactive`)}`}
              onClick={() => (!sorting && this.props.actions.quick_sort())}
            >Quick Sort <span className="text"> <a href='https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39'> See Algorithm</a></span></button>
          </li>
          <li>
            <button 
              className={`offset tooltip ${sorting && (algo==='Merge'  ? `active`: `inactive`)}`}
              onClick={() => (!sorting && this.props.actions.merge_sort())} 
            >Merge Sort <span className="text"> <a href='https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060'> See Algorithm</a></span></button>
          </li>
          <li>
            <button
              className={`offset tooltip ${sorting && (algo==='Insertion'  ? `active`: `inactive`)}`}
              onClick={() => (!sorting && this.props.actions.insertion_sort())}
            >InsertionSort <span className="text"> <a href='https://medium.com/dailyjs/insertion-sort-in-javascript-9c077844717a'> See Algorithm</a></span></button>
          </li>
          <li>
            <button 
              className={`offset tooltip ${sorting && (algo==='Try'  ? `active`: `inactive`)}`}
              onClick={() => (!sorting && this.props.actions.try_me())} 
            >Try me <span className="text"> <a href='https://www.facebook.com/shivam007.35'> What goes around comes around </a></span> </button>
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