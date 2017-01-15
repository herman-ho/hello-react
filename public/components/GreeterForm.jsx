var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      updates.name = name;
      this.refs.name.value = '';
    }

    if (message.length > 0) {
      updates.message = message;
      this.refs.message.value = '';
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="name" type="text" placeholder="Enter name" autofocus /><br />
          <textarea ref="message" placeholder="Enter message" /><br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = GreeterForm;
