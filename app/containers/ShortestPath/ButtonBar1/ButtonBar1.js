import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../sorting_reducer/list_actions';
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
  handlePause = () => {
    this.setState({ pause: !this.state.pause });
  };

  handleStart = () => {
    this.setState({ searching: true });
  };
  handleStart = () => {
    return this.setState({ start: 'yellow', dest: 'white', obst: 'white' });
  };
  handleDest = props => {
    return this.setState({ start: 'white', dest: 'green', obst: 'white' });
  };
  handleObst = props => {
    return this.setState({ start: 'white', dest: 'white', obst: 'red' });
  };

  render() {
    const { pause, sorting, wait_time } = this.props.list;
    return (
      <div className="button1">
        <div className="X1">
          <div className="X1_1">
            {!this.state.searching ? (
              <div className="X1_1">
                <button
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
                  onClick={this.handleStart}
                >
                  <span>START</span>
                  <span className="emoji">
                    <GiThreePointedShuriken />
                  </span>
                </button>
              </div>
            ) : !this.state.pause ? (
              <button
                className="speed1 pulse active end"
                style={{ color: 'oramge' }}
                onClick={this.handlePause}
              >
                <span></span>
                <span className="emoji">
                  <IoMdPause />
                </span>
              </button>
            ) : (
              <button
                className="speed1 pulse active end"
                style={{ color: 'oramge' }}
                onClick={this.handlePause}
              >
                <span></span>
                <span className="emoji">
                  <IoMdPlay />
                </span>
              </button>
            )}
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
          <div className="X1_2">
            <button
              className="pulse active end xxx"
              onClick={this.props.actions.sorting_end}
            >
              <div className="xx">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar1);
