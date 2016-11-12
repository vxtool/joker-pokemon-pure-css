import React, { Component, PropTypes } from 'react';
import './Caterpie.scss';

class Caterpie extends Component {
  render() {
    return (
      <div>
      <div className="pokemon">
        <div className="caterpie">
          <div className="head">
            <div className="horn"></div>
            <div className="eye-left"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
          <div className="body">
            <div className="belly">
              <div className="belly-item"></div>
              <div className="hands1"></div>
              <div className="hands2"></div>
            </div>
            <div className="body-item1"></div>
            <div className="body-item2"></div>
            <div className="body-item3"></div>
            <div className="body-item4"></div>
            <div className="body-item5"></div>
            <div className="tail"></div>
          </div>
        </div>
      </div>
      <div className="pokemon">
        <div className="caterpie caterpie2"></div>
      </div>
      </div>
    );
  }
}

export default Caterpie;
