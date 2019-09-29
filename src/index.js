import React from 'react';
import ReactDOM from 'react-dom';
// import { I18n } from 'react-polyglot';
// import axios from 'axios'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
