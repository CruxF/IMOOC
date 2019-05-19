import React from 'react';
import ReactDOM from 'react-dom';
import './first.css';
import FirstDemo from './firstDemo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FirstDemo />, document.getElementById('root'));

serviceWorker.unregister();
