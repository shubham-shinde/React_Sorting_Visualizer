import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './ButtonBar.scss'
import pauseButton  from "../../images/pause.svg";
import playButton  from "../../images/play.svg";
import stopButton  from "../../images/stop.svg";
import { FaPause,FaPlay, FaStop } from 'react-icons/fa';
import { IconContext } from "react-icons";
class ButtonBar extends React.Component {
    render() { 
        const {pause, sorting} = this.props.list;
        return ( <div className="button">
              {!sorting ?
              <button className="random raise" onClick={this.props.actions.randomize_array}>Randomize</button>
              :
              (
                <div className='X'> 
                  {!pause 
                    ? <button className="speed pulse active" onClick={this.props.actions.pause_sorting}><FaPause/></button>
                    : <button className="speed pulse active" onClick={this.props.actions.restart_sorting}><FaPlay/></button>
                  }
                  <button className="speed pulse active" onClick={this.props.actions.sorting_end}><FaStop/></button>
                </div>
              )
            }
            <div className='X'>
                <button className="speed pulse active" onClick={() => this.props.actions.speed_change(200)}>1x</button>
                <button className="speed pulse active" onClick={() => this.props.actions.speed_change(50)}>2x</button>
                <button className="speed pulse active" onClick={() => this.props.actions.speed_change(10)}>4x</button>
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