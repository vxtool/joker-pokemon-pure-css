import React, { Component, PropTypes } from 'react';
import './Metapod.scss';

class Metapod extends Component {
  render() {
    return (
      <div>
        <div className="pokemon">
          <div className="metapod">
            <div className="head">
              <div className="eye-left"></div>
              <div className="eye-right"></div>
            </div>
            <div className="body">
              <div className="item1"></div>
              <div className="body-item1"></div>
              <div className="body-item2"></div>
              <div className="tail"></div>
            </div>
          </div>
        </div>
        <div className="pokemon">
          <div className="metapod metapod2"></div>
        </div>
      </div>
    );
  }
}

export default Metapod;
