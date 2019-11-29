import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../sorting_reducer/list_actions';
import './ButtonBar.scss'
class ButtonBar extends React.Component {
    state = {  }
    render() { 
        return ( <div className="button">
            <div>
              <button className="random raise" onClick={this.props.actions.randomize_array} >Randomize</button>
              <button className="random raise"> Stop</button>
            </div>
            <div>
                <button className=" speed pulse"> 1x</button>
                <button className=" speed pulse">2x</button>
                <button className=" speed pulse">4x</button>
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