import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import { Client } from './api';
import Styles from './styles';
import HiveMind from './pages/HiveMind';
import BrainWaves from './pages/BrainWaves/Brainwaves';
import TeamMates from './pages/TeamMates/TeamMates';
import Paths from './pages/Paths/Paths';
import Earnings from './pages/Earnings';

const App = () => (
  <>
    <ApolloProvider client={Client}>
        <ThemeProvider theme={Styles}>
        <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/hivemind" replace />} />
              <Route exact path="/hivemind" element={<HiveMind/>}/>
              <Route exact path="/brainwaves" element={<BrainWaves/>}/>
              <Route exact path="/teammates" element={<TeamMates/>}/>
              <Route exact path="/paths" element={<Paths/>}/>
              <Route exact path="/earnings" element={<Earnings/>}/>
            </Routes>
          </Router>
        </ThemeProvider>
    </ApolloProvider>
  </>
);

export default App;
