var React = require('react')
var styles = require('../styles')
var PropTypes = React.PropTypes

var MainContainer = (props) => {
  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
}

module.exports = MainContainer
