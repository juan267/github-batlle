var React = require('react')
var ReactDOM = require('react-dom')

var App = React.createClass({
  render: function () {
    return (
      <h1>hola Desde React</h1>
    )
  }
})

ReactDOM.render(<App />, document.body)
