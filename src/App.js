import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layout from './components/layout/Layout';
import Routes from './router/Routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Layout>
      <Routes />
    </Layout>
  </MuiThemeProvider>
);

export default App;
