const express = require('express')
const webpack = require('webpack')
const path = require('path')
const requireFromString = require('require-from-string')
const MemoryFS = require('memory-fs')
const serverConfig = require('./server.config')

const fs = new MemoryFS()
const app = express()
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = fs

serverCompiler.run(() => {
  const contents = fs.readFileSync(path.resolve(serverConfig.output.path, serverConfig.output.filename), 'utf8')
  const def = requireFromString(contents, serverConfig.output.filename)

  app.get('*', def.default)
  app.listen(3000)
})
