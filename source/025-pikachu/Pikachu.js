import React, { Component, PropTypes } from 'react';
import './Pikachu.scss';

class Pikachu extends Component {
  render() {
    return (
      <div className="container">
        <div className="leftEar">
          <div className="punta"></div>
        </div>
        <div className="rightEar">
          <div className="fillear"></div>
        </div>
        <div className="pikBody">
          <div className="pikHead">
            <div className="eyeLeft"></div>
            <div className="eyeRight"></div>
            <div className="cheekRight"></div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>

          <div className="mid">
            <div className="leftHand"></div>
            <div className="rightHand"></div>
            <div className="mark1"></div>
            <div className="mark2"></div>
          </div>

          <div className="leftFoot"></div>
          <div className="rightFoot"></div>
        </div>
        <div className="tail">
          <div className="part1"></div>
          <div className="part2"></div>
          <div className="part3"></div>
          <div className="part4"></div>
          <div className="part5"></div>
        </div>
      </div>
    );
  }
}

export default Pikachu;
