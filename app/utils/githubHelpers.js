var axios = require('axios')

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

var getRepos = (username) => {
  // fetch username repos
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}

var getTotalStars = (repos) => {
  // calculate the start that the user has
  var starsCount = repos.data.reduce((accomulator, repo) => {
    return accomulator + repo.stargazers_count
  }, 0)
  return starsCount
}

var getPlayersData = (player) => {
  // get repos
  // getTotalStars
  // return object with that data
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        totalStars: totalStars,
        followers: player.followers
      }
    })
}

var calculateScores = (players) => {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
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
      console.warn('Err in getPlayersInfo')
    })
  },
  battle (playersArr) {
    var playerOneInfo = getPlayersData(playersArr[0])
    var playerTwoInfo = getPlayersData(playersArr[1])
    return axios.all([playerOneInfo, playerTwoInfo])
      .then(calculateScores)
  }
}

module.exports = helpers
