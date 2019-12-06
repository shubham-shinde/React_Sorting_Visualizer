import React from 'react';
import './Box.scss';
import { IoMdHappy, IoMdSad, IoIosPlay } from 'react-icons/io';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'black',
      done: false,
    };
  }
  onHandleSelect = () => {
    return !this.state.done
      ? this.setState({ select: this.props.color, done: true })
      : this.setState({ select: 'black' });
  };
  render() {
    return (
      <div
        className="box"
        onClick={this.onHandleSelect}
        // onClick={this.onHandleSelect}
        // onTouchStartCapture={this.onHandleSelect}
        style={{ backgroundColor: this.state.select, borderRadius: '20%' }}
      >
        <span>{/* <IoMdHappy /> */}</span>
      </div>
    );
  }
}

export default Box;
