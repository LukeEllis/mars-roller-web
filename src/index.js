import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render((
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
