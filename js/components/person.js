var React = require('react');
var ReactDOM = require('react-dom');

var Person = function(){
  var name = 'Derek Zoolander';
  var imageURL = 'http://uifaces.com/assets/static/images/zoolander.jpg';
  var job = 'Male model';
  return (
    <div className="person">
      <div className="person-name">{name}</div>
      <img className="person-img" src={imageURL} />
      <div className="person-job">
        {job}
      </div>
    </div>
  );
};

module.exports = Person;