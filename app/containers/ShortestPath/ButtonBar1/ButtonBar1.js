import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../sorting_reducer/list_actions';
import './ButtonBar1.scss'
import { FaPause,FaPlay, FaStop } from 'react-icons/fa';
class ButtonBar1 extends React.Component {
    render() { 
        const {pause, sorting, wait_time} = this.props.list;
          return ( 
          <div className="button">
            <div className='X'> 
              <button className="speed pulse active end" onClick={this.props.actions.sorting_end}>START</button>
              <button className="speed pulse active end" onClick={this.props.actions.sorting_end}>FINISHED</button>
              <button className="speed pulse active end" onClick={this.props.actions.sorting_end}>OBSTACLE</button>
              <button className="speed pulse active end" onClick={this.props.actions.sorting_end}>SPEED</button>
            </div>
        </div> );
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar1);