//@ts-check
import React from 'react';
import reportWebVitals from './reportWebVitals';
/** Router */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
/** MUI */
import { ThemeProvider } from '@emotion/react';
/** Componentes */
import Router from './Router';
/** Style */
import './index.css';
/** Theme */
import { darkTheme } from './theme';
import { AuthProvider } from './context/AuthContext';
import { MultiplayerProvider } from './context/MultiplayerContext';

const root = ReactDOM.createRoot(document?.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MultiplayerProvider>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </MultiplayerProvider>
    </AuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();