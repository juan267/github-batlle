var React = require('react')
var ReactDOM = require('react-dom')
var routes = require('./config/routes')

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
        <ProfileName username={this.props.user.username} />
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

var Name = React.createClass({
  render () {
    return (
      <p>{this.props.name}</p>
    )
  }
})

var ProfileName = React.createClass({
  render () {
    return (
      <Link href={'https://github.com/' + this.props.username}>
        {this.props.username}
      </Link>
    )
  }
})

var Link = React.createClass({
  changeUrl () {
    window.location.replace(this.props.href)
  },
  render () {
    return (
      <span
        style={{cursor: 'pointer', color: 'blue'}}
        onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
})

ReactDOM.render(routes, document.getElementById('app'))
