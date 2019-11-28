import React from 'react';
import './Piller.scss';
class Piller extends React.Component {
  render() {
    const { height,white,pinter} = this.props;
    let color = [
      '#0802f7',
      '#1003ef',
      '#1905e6',
      '#2107de',
      '#2908d6',
      '#310ace',
      '#3a0cc5',
      '#420dbd',
      '#4a0fb5',
      '#5210ad',
      '#5a12a5',
      '#63149c',
      '#6b1594',
      '#73178c',
      '#7b1984',
      '#841a7b',
      '#8c1c73',
      '#941e6b',
      '#9c1f63',
      '#a5215a',
      '#ad2352',
      '#b5244a',
      '#bd2642',
      '#c5273a',
      '#ce2931',
      '#d62b29',
      '#de2c21',
      '#e62e19',
      '#ef3010',
      '#f73108',
    ];
    if(white){
        color[height]="white"
    }
    

    return (
      <div
        className="piller"
        key={color[height]}
        style={{
          backgroundColor: color[height],
          height: `${height}rem`,
          width: '1rem',
        }}
      ></div>
    );
  }
}

export default Piller;
