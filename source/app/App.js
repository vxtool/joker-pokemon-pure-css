'use strict';

import React from 'react';
import Caterpie from '../010-caterpie';
import Metapod from '../011-metapod';
import Weedle from '../013-weedle';
import './App.scss';

const App = () => (
  <div>
    <h1>Pokémons</h1>
    <Caterpie />
    <Metapod />
    <Weedle />
  </div>
)

export default App;
