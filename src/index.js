import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import 'index.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'GlobalStyles';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
