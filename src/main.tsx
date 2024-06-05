import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
