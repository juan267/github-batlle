var React = require('react')
var PropTypes = React.PropTypes
var UserDetailsWrapper = require('./UserDetailsWrapper')
var UserDetails = require('./UserDetails')
var styles = require('../styles/index')
var Link = require('react-router').Link
var MainContainer = require('./MainContainer')
var Loading = require('./Loading')

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var StartOver = (props) => {
  return (
    <div className='col-sm-8 col-sm-offset-2'>
      <div className='col-sm-12' style={styles.space}>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>
            Start Again
          </button>
        </Link>
      </div>
    </div>
  )
}

var Results = (props) => {
  var indexOfMaxValue = props.scores.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  var indexOfMinvalue = indexOfMaxValue === 0 ? 1 : 0

  if (props.isLoading === true) {
    return <Loading />
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a Tie</h1>
        <StartOver />
      </MainContainer>
    )
  }

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[indexOfMaxValue]} info={props.playersInfo[indexOfMaxValue]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[indexOfMinvalue]} info={props.playersInfo[indexOfMinvalue]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results
