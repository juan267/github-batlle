var React = require('react')

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    positon: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
}

var Loading = React.createClass({
  originalText: 'Loading',
  getInitialState () {
    return {
      text: this.originalText
    }
  },
  componentDidMount () {
    this.interval = setInterval(() => {
      if (this.state.text === 'Loading...') {
        this.setState({
          text: this.originalText
        })
      } else {
        return this.setState({
          text: this.state.text + '.'
        })
      }
    }, 300)
  },
  componentWillUnmount () {
    clearInterval(this.interval)
  },
  render () {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})

module.exports = Loading

