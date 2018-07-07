const express = require('express')
const app = express()

// Serve files inside the public directory
app.use(express.static('public'))

// Return a number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Respond with a random hanzi as JSON
app.get('/hanzi', (req, res) => {
  let ord = getRandomInt(0x4e00, 0x9fff)
  res.status(200).json({
    text: String.fromCodePoint(ord),
    ordinal: ord,
  })
})

const listener = app.listen(process.env.PORT || 8000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
