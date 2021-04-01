
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <ChakraProvider>
      <Auth0Provider
    domain="dev-3mwnb68w.jp.auth0.com"
    clientId="8LNcpqGCxyt1GzdE3nJfaJvu3I6PYDKq"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
    </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
