const axios = require('axios')

module.exports = (req, res) => {
  const url = `https://ipinfo.io/json`
  axios
    .get(url)
    .then((response) => {
      const {data} = response
      console.log(response)
      res.status(200)
      res.json(data)
    })
    .catch((err) => {
      res.status(err.response ? err.response.status : 500)
      res.send(err.message || 'Something went wrong! Please try again later.')
    })
}
