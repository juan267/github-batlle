var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')
var githubHelpers = require('../utils/githubHelpers')
var UserNotFound = require('../components/UserNotFound')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    console.log('getInitialState')
    return {
      playersInfo: [],
      loading: true,
      userNotfound: false
    }
  },
  componentWillMount () {
    console.log('componentWillMount')
  },
  componentDidMount () {
    console.log('componentDidMount')
    var query = this.props.location.query
    console.log('Query', query)
    // Fetch user from github
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          loading: false,
          playersInfo: [players[0], players[1]]
        })
      }).catch((err) => {
        console.log('Error in componDiDMount battle container', err)
        this.setState({
          loading: false,
          userNotfound: true
        })
      })
  },
  componentWillReceiveProps () {
    console.log('ComponentWillReceiveProps')
  },
  componenWillUnmount () {
    console.log('ComponentWillUnmount')
  },
  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render () {
    console.log('Rendering')
    if (this.state.userNotfound === true) {
      return <UserNotFound isLoading={this.state.loading} />
    }
    return (
      <div>
        <ConfirmBattle
          isLoading={this.state.loading}
          playersInfo={this.state.playersInfo}
          onInitiateBattle={this.handleInitiateBattle} />
      </div>
    )
  }
})

module.exports = ConfirmBattleContainer
