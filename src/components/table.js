const React = require('react');
const DOM = require('react-dom');
const _ = require('lodash');

const PropTypes = React.PropTypes;
const Model = React.createFactory(require('./model'));
const TableRow = React.createFactory(require('./table-row'));
const TableColumn = React.createFactory(require('./table-column'));
const TableHeaderColumn = React.createFactory(require('./table-header-column'));

const transform = require("../lib/transformers/schema");

module.exports = React.createClass({
  displayName: 'Table',

  propTypes: {
    name: PropTypes.string.isRequired,
    schema: PropTypes.object.isRequired,
    headers: PropTypes.array.isRequired,
    data: PropTypes.array
  },

  getDefaultProps: function() {
    return {
      data: []
    };
  },

  getInitialState: function() {
    return {
      relationships: this.calcRelations(this.props.schema)
    };
  },

  calcRelations: function(schema) {
    if (!schema.links) return {};
    return schema.links.reduce((r, link) => {
      if (schema.properties[link.rel]) {
        r[link.rel] = link.href;
      }
      return r;
    }, {});
  },

  getHeaderRow: function(headers) {
    const columns = headers.map((header, index) => {
      return TableHeaderColumn({key: index}, header);
    });
    return TableRow({columns: columns});
  },

  getRows: function() {
    const data = this.props.data;

    return data.map((row, index) => {
      const values = _.values(row);
      const columns = values.map((column, index) => {
        return TableColumn({key: index}, column);
      });
      return TableRow({key: index, columns: columns});
    });
  },

  render: function() {
    return React.DOM.div(
      null,
      React.DOM.h3({key: 'header'}, this.props.name),
      this.state.instance ?
        React.DOM.dialog({open: true, key: 'instance', id: 'instance'}, this.state.instance)
        : null, // TODO allow a specifed element or DOM node to be passed in at instantiation
      React.DOM.table({key: 'table'}, [
        React.DOM.thead({key: 'thead'}, this.getHeaderRow(this.props.headers)),
        React.DOM.tbody({key: 'tbody'}, this.getRows())
      ])
    );
  }
});
