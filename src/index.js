import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';
//import {observer,Provider,inject} from  'mobx-react';
ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
