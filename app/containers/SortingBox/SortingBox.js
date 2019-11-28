import React from 'react';
import Piller from '../Piller/Piller';
import { connect } from 'react-redux'

import './SortingBox.scss';
class SortingBox extends React.Component {
  render() {
    let list = this.props.list.list;

    return ( 
      <div className="SortingBox">
        { 
          list.map(i=>(
            <Piller height={i} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list : state.list
})


export default connect(mapStateToProps)(SortingBox);
