import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../sortest_path_reducer/grid_actions';
import './index.scss';
import Box from '../Box';
import '../ButtonBar';

class Grid extends React.PureComponent {

  shouldComponentUpdate = () => false

  render() {
    const { grid } = this.props.grid || {};
    return (
      <div className="grid">
        {grid.map(row => (
          <div className="array">
            {row.map(box => (
              <Box {...box} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.grid,
});

export default connect(mapStateToProps)(Grid);
