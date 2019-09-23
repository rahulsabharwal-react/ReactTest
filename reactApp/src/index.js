/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { ElementNames } from './constants/elementsName';
import App from './components/App';

function render(component, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const spaStore = configureStore();
        ReactDOM.render(<Provider store={spaStore}>{component}</Provider>, element);
    }
}
render(<App />, ElementNames.APP);
