import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import App from './App';
import './global.css';

ReactDom.render(<ResultContextProvider><BrowserRouter><App /></BrowserRouter></ResultContextProvider>, document.getElementById('root'));
