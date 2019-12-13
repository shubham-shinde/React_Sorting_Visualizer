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
    const { grid, row, column} = this.props;
    const {start, end, clog, checked, queue, path} = grid;
    let color = 'black';
    if(start.length>0 && start[0] === row && start[1] === column) color = 'yellow';
    else if(end.length>0 && end[0] === row && end[1] === column) color = 'green';
    else {
      clog.forEach(ele => {
        if(ele.length>0 && ele[0] === row && ele[1] === column) color = 'red';
      });
      queue.forEach(ele => {
        if(ele.point.length>0 && ele.point[0] === row && ele.point[1] === column) color = 'gray';
      });
      checked.forEach(ele => {
        if(ele.length>0 && ele[0] === row && ele[1] === column) color = 'white';
      });
      path.forEach(ele => {
        if(ele.length>0 && ele[0] === row && ele[1] === column) color = 'green';
      });
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
