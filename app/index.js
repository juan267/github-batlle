var React = require('react')
var ReactDOM = require('react-dom')

var USER_DATA = {
  name: 'Juan Gomez',
  username: 'juan267',
  image: 'http://m.c.lnkd.licdn.com/mpr/mpr/AAEAAQAAAAAAAAMiAAAAJGVlYTU5Y2YyLWQwMzYtNDlmZS04MDdlLWI0ZjJjZWRhYjk4ZQ.jpg'
}

var Avatar = React.createClass({
  render () {
    return (
      <div>
        <Image src={this.props.user.image} />
        <Name name={this.props.user.name} />
        <Username username={this.props.user.username} />
      </div>
    )
  }
})

var Image = React.createClass({
  render () {
    return (
      <img src= {this.props.src} style={{ width: 100, height: 100 }} />
    )
  }
})

var Username = React.createClass({
  render () {
    return (
      <a href={'https://www.github.com/' + this.props.username}>{this.props.username}</a>
    )
  }
})

var Name = React.createClass({
  render () {
    return (
      <p>{this.props.name}</p>
    )
  }
})

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'))
