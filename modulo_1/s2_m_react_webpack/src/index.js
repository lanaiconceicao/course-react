// index.js -> main entry of files edition (webpack is listening this file)
'use strict'

import { AppContainer } from 'react-hot-loader'
import App from './app'
import React from 'react'
import { render } from 'react-dom'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

// first render:
renderApp(App)

// we are using hot loader ONLY for development
if (module.hot) {
  module.hot.accept('./app', () => {
    // .default -> exports.default = App
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
