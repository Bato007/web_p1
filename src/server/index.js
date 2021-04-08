import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import 'ignore-styles'

import App from '../client/App'

const app = express()
const port = 3001

app.use('/dist', express.static(path.join(__dirname, '..', '..', 'dist')))

app.get('*', (req, res) => {
  const root = (
    <html lang="en">
      <head>
        <title>Proyecto 1 Web</title>
      </head>
      <body>
        <div id="root">
          <App />
        </div>
        <script src="/dist/index_bundle.js" />
      </body>
    </html>
  )

  const html = ReactDOMServer.renderToString(root)
  res.send(html)
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
