var React = require('react');
var createClass = require('create-react-class');
var ListItem = createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredients}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
