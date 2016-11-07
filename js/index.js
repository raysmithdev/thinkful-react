require('babel-polyfill');

var ReactDom = require('react-dom');
var Person = require('./components/person');

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Person />, document.getElementById('app'));
});
