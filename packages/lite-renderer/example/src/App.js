import React, { Component } from 'react'

import FLMC from 'lite-renderer'
import routes from './routes';

const skeletons = {
  "Custom Skeleton": (props) => <div><p>this is a custom skeleton</p></div>
}

export default class App extends Component {
  render() {
    return (
      <FLMC 
        routes={routes}
        skeletons={skeletons}
        routerMiddlewares={{
          afterRouteChanged: [
            (route) => console.log("route changed to", route)
          ]
        }}
      />
    )
  }
}
