var axios = require('axios')

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

var helpers = {
  getPlayersInfo (players) {
    return axios.all(players.map((username) => {
      return getUserInfo(username)
    })).then((info) => {
      return info.map((user) => {
        return user.data
      })
    }).catch((err) => {
      console.warn('Errro in getPlayersInfo')
    })
  }
}

module.exports = helpers
