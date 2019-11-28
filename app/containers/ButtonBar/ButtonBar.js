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
            </div>
            <div>
                <button className="random pulse"> Fast</button>
                <button className="random pulse">Medium</button>
                <button className="random pulse">Slow</button>
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