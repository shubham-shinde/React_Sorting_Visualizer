import React from 'react';
import './Piller.scss';
class Piller extends React.Component {
  render() {
    const { height, white, pointer} = this.props;
    
    let color = ["#0701f8","#0e03f1","#1504ea","#1c06e3","#2207dd","#2908d6","#300acf","#370bc8","#3e0cc1","#450eba","#4c0fb3","#5311ac","#5a12a5","#60139f","#671598","#6e1691","#75178a","#7c1983","#831a7c","#8a1c75","#911d6e","#981e67","#9f2060","#a5215a","#ac2253","#b3244c","#ba2545","#c1273e","#c82837","#cf2930","#d62b29","#dd2c22","#e32d1c","#ea2f15","#f1300e","#f83207"]
        if(white){
        color[height]="white";
    }
    

    return (
      <div
        className="piller"
        key={color[height]}
        style={{
            backgroundColor: color[height],
            height: `${height/2}rem`,
            minWidth: '',
            flexGrow:1
            
        }}
        >
            { pointer && <div className="pointer"></div> }
        </div>
    );
  }
}

export default Piller;
