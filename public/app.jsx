var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var inputName = 'Guest';

ReactDOM.render(
  <Greeter name={inputName} />,
  document.getElementById('app')
);
