var React = require('react')
var Results = require('../components/Results')
var githubHelpers = require('../utils/githubHelpers')

var ResultsContainer = React.createClass({
  getInitialState () {
    return {
      loading: true,
      scores: []
    }
  },
  componentDidMount () {
    console.log(this.props.location.state)
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then((scores) => {
        this.setState({
          scores: scores,
          loading: false
        })
      })
  },
  render () {
    return (
      <Results
        isLoading={this.state.loading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    )
  }
})

module.exports = ResultsContainer
