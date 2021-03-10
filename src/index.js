import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import reportWebVitals from './reportWebVitals';

require('dotenv').config()

const client = new ApolloClient({
  // uri: "https://api-ap-northeast-1.graphcms.com/v2/ckli8x5xhcdo901z6fs7ca4x5/master"
  uri: process.env.REACT_APP_GRAPH_CMS_KEY
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
