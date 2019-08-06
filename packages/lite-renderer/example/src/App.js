import React, { Component } from "react";

import FLMC from "lite-renderer";
import routes from "./routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const skeletons = {
  "Custom Skeleton": props => (
    <div>
      <p>this is a custom skeleton</p>
    </div>
  )
};

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <FLMC
          routes={routes}
          skeletons={skeletons}
          customElementMappers={
            [
              // props => {
              //   console.log(props);
              //   return <p>test</p>;
              // }
            ]
          }
          routerMiddlewares={{
            afterRouteChanged: [route => console.log("route changed to", route)]
          }}
        />
      </MuiThemeProvider>
    );
  }
}
