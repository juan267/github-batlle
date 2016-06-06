var React = require('react')
var MainContainer = require('./MainContainer')
var styles = require('../styles')
var Link = require('react-router').Link
var Loading = require('./Loading')

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

var UserNotFound = (props) => {
  return props.isLoading === true
    ? <Loading />
    : <MainContainer>
        <h1>User not found, Try again</h1>
        <StartOver />
      </MainContainer>
}

module.exports = UserNotFound
