import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import { Client } from './api';
import Styles from './styles';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import TeamMates from './pages/TeamMates/TeamMates';
import Paths from './Paths';

const App = () => (
  <>
    <ApolloProvider client={Client}>
        <ThemeProvider theme={Styles}>
        <Router>
            <Routes>
              <Route path="/" element={<Navigate to={Paths.home} replace />} />
              <Route exact path={Paths.home} element={<Homepage/>}/>
              <Route exact path={Paths.signup} element={<Signup/>}/>
              <Route exact path={Paths.login} element={<TeamMates/>}/>
            </Routes>
          </Router>
        </ThemeProvider>
    </ApolloProvider>
  </>
);

export default App;
