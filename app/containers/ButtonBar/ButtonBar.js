import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './ButtonBar.scss'
import pauseButton  from "../../images/pause.svg";
import playButton  from "../../images/play.svg";
import stopButton  from "../../images/stop.svg";

class ButtonBar extends React.Component {
    render() { 
        const {pause, sorting, wait_time} = this.props.list;
        return ( <div className="button">
            <div className="pause">
              {!sorting ?
              <button className="random raise" onClick={this.props.actions.randomize_array}>Randomize</button>
              :
              (!pause ?
                <div className='playpause'>
                  <div className=" raise" onClick={this.props.actions.pause_sorting}><img src = {pauseButton}></img></div>
                  <div className=" raise" onClick={this.props.actions.sorting_end}><img src ={stopButton}></img></div>
                </div>
                :
                <div className='playpause'>
                  <div className=" raise" onClick={this.props.actions.restart_sorting}><img src = {playButton}></img></div>
                  <div className=" raise" onClick={this.props.actions.sorting_end}><img src ={stopButton}></img></div>
                </div>  
              )
            }
              
            </div>
            <div className='X'>
                <button className={wait_time===200 ? "speed pulse active" : "speed pulse"} onClick={() => this.props.actions.speed_change(200)}>1x</button>
                <button className={wait_time===50 ? "speed pulse active" : "speed pulse"} onClick={() => this.props.actions.speed_change(50)}>2x</button>
                <button className={wait_time===10 ? "speed pulse active" : "speed pulse"} onClick={() => this.props.actions.speed_change(10)}>4x</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar);