import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../sortest_path_reducer/grid_actions';
import './Box.scss';
import { bindActionCreators } from 'redux';

class Box extends React.Component {
  onHandleSelect = () => {
    console.log('select', this.props.row, this.props.column);
    this.props.actions.add_element([this.props.row, this.props.column])
  };
  render() {
    const { grid, row, column, start, end, clog, checked, queue, path} = this.props;
    let color = 'black';
    if(start) color = 'yellow';
    else if(end) color = 'green';
    
    else {
      if(clog) color = 'red';
      if(queue) color = 'gray';
      if(checked) color = 'white';
      if(path) color = 'green';
    }
    return (
      <div
        className="box"
        onClick={this.onHandleSelect}
        // onTouchStartCapture={this.onHandleSelect}
        style={{ backgroundColor: color, borderRadius: '0.35rem' }}
      >
        <span>{/* <IoMdHappy /> */}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Box);
