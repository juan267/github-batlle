var React = require('react')
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      username: ''
    }
  },
  onUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser (e) {
    e.preventDefault()
    var username = this.state.username
    this.setState({
      username: ''
    })
    if (this.props.routeParams.playerOne) {
      // Go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      })
    } else {
      // Go to PlayerTwo
      this.context.router.push({
        pathname: `/playerTwo/${username}`
      })
      console.log(this.context)
    }
  },
  render () {
    return (
      <Prompt
        username={this.state.username}
        header={this.props.route.header}
        onSubmitUser={this.onSubmitUser}
        onUpdateUser={this.onUpdateUser} />
    )
  }
})

module.exports = PromptContainer
