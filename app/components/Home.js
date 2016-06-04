var React = require('react')
var transparentBg = require('../styles/index').transparentBg
var Link = require('react-router').Link
var MainContainer = require('./MainContainer')
var Home = React.createClass({
  render () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>some fancy motto</p>
        <Link to='/playerOne'>
          <button className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
})
module.exports = Home
