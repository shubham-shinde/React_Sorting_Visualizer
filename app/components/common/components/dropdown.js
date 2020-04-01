import React from 'react';
import IoMdHappy from 'react-icons/lib/io/happy.js';
import FaStart from 'react-icons/lib/fa/angle-right';
import './dropdown.scss';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
    }
  }
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  handleClick(fn) {
    this.setState({listOpen:false}, fn)
  }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  render(){
    const{list, headerTitle} = this.props
    const{listOpen} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">
            {headerTitle}
            {listOpen
              ? <FaStart/>
              : <FaStart/>
            }
          </div>
        </div>
        {listOpen && <ul className="dd-list">
          {list.map((item) => (
            <li
              className="dd-list-item" key={item.id}
              onClick={() => this.handleClick(item.click)}
            >{item.title}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default DropDown;
