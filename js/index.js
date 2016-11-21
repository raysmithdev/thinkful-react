require('babel-polyfill');

// 1. You forgot to require React
// 2. When you required ReactDOM you spelled ReactDOM AS ReactDom


var React = require('react');
var ReactDOM = require('react-dom');
var Person = require('./components/person');

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Person />, document.getElementById('app'));
});
