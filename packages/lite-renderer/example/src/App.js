import React, { Component } from 'react'

import FLMC from 'lite-renderer'
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <FLMC routes={routes} />
    )
  }
}
