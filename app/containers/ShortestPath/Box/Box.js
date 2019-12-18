import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../sortest_path_reducer/grid_actions';
import './Box.scss';
import { bindActionCreators } from 'redux';
import $ from 'jquery';

class Box extends React.Component {
  onHandleSelect = () => {
    console.log('select', this.props.row, this.props.column);
    this.props.actions.add_element([this.props.row, this.props.column]);
  };
  render() {
    const {
      grid,
      row,
      column,
      start,
      end,
      clog,
      checked,
      queue,
      path,
    } = this.props;
    let color = '#0A0908';
    if (start) color = '#FFE066';
    else if (end) color = '#217C3B';
    else {
      if (clog) color = '#FF3C38';
      if (queue) color = '#70C1B3';
      if (checked) color = '#B2DBBF';
      if (path) color = '#C0E070';
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
