const React = require('react');

module.exports = React.createClass({
  displayName: 'Table Column',

  render: function() {
    return React.DOM.td(
      null,
      this.props.children
    );
  }
});