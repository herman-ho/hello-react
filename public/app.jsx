var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default message.',
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message,
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

var inputName = 'Guest';

ReactDOM.render(
  <Greeter name={inputName} />,
  document.getElementById('app')
);
