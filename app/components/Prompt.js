var React = require('react')
var transparentBg = require('../styles/index').transparentBg
var PropTypes = React.PropTypes

// Functional Stateless components

function Prompt (props) {
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1>{props.header}</h1>
      <div className='col-sm-12'>
        <form onSubmit={props.onSubmitUser}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Github Username'
              value={props.username}
              onChange={props.onUpdateUser}
              required />
          </div>
          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button className='btn btn-block btn-success' type='submit'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
}

module.exports = Prompt

// var Prompt = React.createClass({
//   propTypes: {
//     header: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     onSubmitUser: PropTypes.func.isRequried,
//     onUpdateUser: PropTypes.func.isRequired
//   },
//   render () {
//     return (
//       <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
//         <h1>{this.props.header}</h1>
//         <div className='col-sm-12'>
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 placeholder='Github Username'
//                 value={this.props.username}
//                 onChange={this.props.onUpdateUser}
//                 required />
//             </div>
//             <div className='form-group col-sm-4 col-sm-offset-4'>
//               <button className='btn btn-block btn-success' type='submit'>
//                 Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// })
