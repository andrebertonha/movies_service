require('dotenv-safe').load()
const movies = require('./api/movies')
const server = require('./server/server')
const repository = require('./repository/repository')

server.start(movies, repository, (err, app) => {
    if(err) console.log(err)
    console.log('just started')
})