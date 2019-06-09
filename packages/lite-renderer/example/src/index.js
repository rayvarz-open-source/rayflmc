import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import { ThemeProvider } from 'lite-renderer'

ReactDOM.render(
        <App />,
    document.querySelector('#root'),
);