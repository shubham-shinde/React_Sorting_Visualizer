import React from 'react';
import Piller from '../Piller';
import { connect } from 'react-redux';
import './index.scss';

class SortingBox extends React.Component {
  render() {
    let list = this.props.list.list;

    return (
      <div className="father">
        <div className="ray"></div>
        <div className="SortingBox">
          {list.map(i => (
            <Piller height={i.num} white={i.white} pointer={i.pointer} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
});

export default connect(mapStateToProps)(SortingBox);
