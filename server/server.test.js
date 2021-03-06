const test = require('tape')
const server = require('./server')

function apiMock(app, repo) {
    console.log('do nothing')
}

function runTests() {
    test('Server Start', (t) => {
        server.start(apiMock, null, (err, srv) => {
            t.assert(!err && srv, 'server started')
            t.end()
        })
    })
    test('Server Stop', (t) => {
        t.assert(server.stop(), 'server stopped')
        t.end()
    })
}

module.exports = { runTests }