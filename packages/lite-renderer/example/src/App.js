import { MuiThemeProvider } from "@material-ui/core/styles";
import FLMC from "lite-renderer";
import React, { Component } from "react";
import routes from "./routes";
import theme from "./theme";

const skeletons = {
  "Custom Skeleton": props => (
    <div>
      <p>this is a custom skeleton</p>
    </div>
  )
};

// class TestService {
//   value;

//   constructor() {
//     this.value = Math.random();
//   }
// }

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <FLMC
          routes={routes}
          skeletons={skeletons}
          // serviceRegisterer={container => {
          //   container.addSingleton({ serviceName: "TestService", builder: () => new TestService() });
          // }}
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
