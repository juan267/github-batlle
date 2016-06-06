var React = require('react')
var PropTypes = React.PropTypes

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
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps () {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState () {
    this.originalText = this.props.text
    return {
      text: this.originalText
    }
  },
  componentDidMount () {
    this.interval = setInterval(() => {
      if (this.state.text === `${this.props.text}...`) {
        this.setState({
          text: this.originalText
        })
      } else {
        return this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
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

