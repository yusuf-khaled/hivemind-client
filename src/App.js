import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import { Client } from './api';
import Styles from './styles';
import Paths from './Paths';
import Header from './components/Header';
import HiveMind from './pages/HiveMind';

const App = () => (
  <>
    <ApolloProvider client={Client}>
        <ThemeProvider theme={Styles}>
        <Router>
            <Routes>
              <Route exact path="/hivemind" element={<HiveMind/>}/>
              <Route path="/" element={<Navigate to="/hivemind" replace />} />
            </Routes>
          </Router>
        </ThemeProvider>
    </ApolloProvider>
  </>
);

export default App;
