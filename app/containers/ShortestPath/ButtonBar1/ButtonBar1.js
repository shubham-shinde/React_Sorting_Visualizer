import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../sortest_path_reducer/grid_actions';
import './ButtonBar1.scss';
import {
  IoMdHappy,
  IoMdSad,
  IoIosPlay,
  IoMdPlay,
  IoMdPause,
} from 'react-icons/io';
import { GiGhost, GiThreePointedShuriken } from 'react-icons/gi';

class ButtonBar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 'white',
      dest: 'white',
      obst: 'white',
      pause: false,
      searching: false,
    };
  }

  handlReset = () => {
    this.setState({
      start: 'white',
      dest: 'white',
      obst: 'white',
      pause: false,
      searching: false,
    });
  };
  handlePause = () => {
    this.setState({ pause: !this.state.pause });
  };

  handleSearch = () => {
    this.setState({ searching: true });
  };

  render() {
    const {
      pause,
      wait_time,
      finding,
      actv_srt_btn,
      actv_end_btn,
      actv_clog_btn,
    } = this.props.grid;

    return (
      <div className="button1">
        <div className="X1">
          <div className="X1_1">
            {!finding ? (
              <div className="X1_1">
                <button
                  className="speed1 pulse active "
                  onClick={this.props.actions.act_start_btn}
                  style={{
                    color: actv_srt_btn && 'yellow',
                    background: actv_srt_btn && 'black',
                    boxShadow: actv_srt_btn && '0 8px 6px -6px yellow',
                    border: actv_srt_btn && '4px solid yellow',
                  }}
                >
                  <div>
                    <span>BEGIN</span>
                    <span className="emoji">
                      <IoMdSad />
                    </span>
                  </div>
                </button>
                <button
                  className="speed1 pulse active "
                  onClick={this.props.actions.act_end_btn}
                  style={{
                    color: actv_end_btn && '#16e016',
                    background: actv_end_btn && 'black',
                    boxShadow: actv_end_btn && '0 8px 6px -6px #16e016',
                    border: actv_end_btn && '4px solid green',
                  }}
                >
                  <span>END</span>
                  <span className="emoji">
                    <IoMdHappy />
                  </span>
                </button>

                <button
                  className="speed1 pulse active "
                  onClick={this.props.actions.act_clog_btn}
                  style={{
                    color: actv_clog_btn && '#ff3604',
                    background: actv_clog_btn && 'black',
                    boxShadow: actv_clog_btn && '0 8px 6px -6px #ff3604',
                    border: actv_clog_btn && '4px solid #ff3604',
                  }}
                >
                  <span>CLOG</span>
                  <span className="emoji">
                    <GiGhost />
                  </span>
                </button>
                <button
                  className="speed1 pulse active "
                  style={{ color: 'oramge', background: '#98356d' }}
                  onClick={this.props.actions.pathfinding_algo}
                >
                  <span>START</span>
                  <span className="emoji">
                    <GiThreePointedShuriken />
                  </span>
                </button>
                <button
                  className="speed1 pulse active "
                  style={{ color: 'oramge', background: '#98356d' }}
                  // onClick={this.props.actions.pathfinding_algo}
                >
                  <span>RESET</span>
                  <span className="emoji">
                    <GiThreePointedShuriken />
                  </span>
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexGrow: '1' }}>
                {!this.state.pause ? (
                  <button
                    className="speed1 pulse active"
                    style={{
                      color: 'oramge',
                      width: '2rem',
                      // border: '4px solid #95386d',
                      background: '#95386d',
                    }}
                    onClick={this.handlePause}
                  >
                    <span className="emoji">
                      <IoMdPause />
                    </span>
                  </button>
                ) : (
                  <div>
                    <div>
                      <button
                        className="speed1 pulse active "
                        style={{
                          color: 'oramge',
                          width: '2rem',
                          // border: '4px solid #95386d',
                          background: '#95386d',
                        }}
                        onClick={this.handlePause}
                      >
                        <span className="emoji">
                          <IoMdPlay />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
                <button
                  className="speed1 pulse active "
                  style={{ color: 'oramge', background: '#98356d' }}
                  // onClick={this.props.actions.pathfinding_algo}
                >
                  <span>END</span>
                  {/* <span className="emoji">
                    <GiThreePointedShuriken />
                  </span> */}
                </button>
                <div className="X1_2">
                  <button
                    className="pulse active end xxx"
                    onClick={this.props.actions.sorting_end}
                  >
                    <div className="xx active">
                      <span>1x</span>
                    </div>
                    <div className="xx">
                      <span>2x</span>
                    </div>
                    <div className="xx">
                      <span>4x</span>
                    </div>
                  </button>
                </div>
              </div>
            )}
            {/* <div>
              <button
                className="speed1 pulse active "
                style={{ color: 'oramge', background: '#95386d' }}
                onClick={this.handlReset}
              >
                <span>RESET</span>
                <span className="emoji"></span>
              </button>
            </div> */}
            {/* <button
              className="speed1 pulse active end"
              onClick={this.props.actions.sorting_end}
              onClick={this.handleStart}
              style={{ color: this.state.start }}
            >
              <span>BEGIN</span>
              <span className="emoji">
                <IoMdSad />
              </span>
            </button>

            <button
              className="speed1 pulse active end"
              onClick={this.props.actions.sorting_end}
              onClick={this.handleDest}
              style={{ color: this.state.dest }}
            >
              <span>END</span>
              <span className="emoji">
                <IoMdHappy />
              </span>
            </button>

            <button
              className="speed1 pulse active end"
              onClick={this.props.actions.sorting_end}
              onClick={this.handleObst}
              style={{ color: this.state.obst }}
            >
              <span>CLOG</span>
              <span className="emoji">
                <GiGhost />
              </span>
            </button>
            <button
              className="speed1 pulse active end"
              style={{ color: 'oramge' }}
            >
              <span>START</span>
              <span className="emoji">
                <GiThreePointedShuriken />
              </span>
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.grid,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar1);
