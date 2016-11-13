import React, { Component, PropTypes } from 'react';
import './Metapod.scss';

class Metapod extends Component {
  render() {
    return (
      <div>
        <div className="pokemon">
          <div className="metapod">
            <div className="head">

            </div>
            <div className="body">

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
