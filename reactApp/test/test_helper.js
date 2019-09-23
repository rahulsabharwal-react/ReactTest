import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react'; 
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';
import chaiJquery from 'chai-jquery';


const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

global.window = global.document.defaultView;
const $ =  _$(global.window);

function renderComponent(ComponentClass, props, state){
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={configureStore()}>
            <ComponentClass {...props} />
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); 
}

$.fn.simulate = function(eventName, value){

    if (value){
        this.val(value); 
    }

    TestUtils.Simulate[eventName](this[0]);

};

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
