/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import ListGallery from './Components/ListGallery';
import FormGallery from './Components/FormGallery';
import FormController from './flmc/FormController/FormController';
import Container from './flmc/FormController/Elements/ContainerElement';
import ContainerElement from './Components/ContainerElement';
import SampleForm from './Forms/SampleForm';
import DirectionsForm from './Forms/ContainerDirectionsForm';

const routes = {
  main: 'MAIN',
  gallery_form: 'GALLERYFORM',
  gallery_list: 'GALLERYLIST',
  SAMPLE_FORM: 'SAMPLE_FORM',
  DIRECTIONS_FORM: 'DIRECTIONS_FORM',
}

type Props = {}
type State = {
  currentRoute: string
}

export default class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      currentRoute: routes.main
    }
  }

  createViewFromFormController(controller: FormController) {
    let mainContainer = Container(controller.elements);
    return <ContainerElement element={mainContainer}/>
  }

  renderMain() {
    return (
      <View style={{flexDirection: 'column'}}>
        <Button title="Sample Form" onPress={() => this.setState({currentRoute: routes.SAMPLE_FORM})}/>
        <Button title="Directions Form" onPress={() => this.setState({currentRoute: routes.DIRECTIONS_FORM})}/>
      </View>
    )
  }

  renderCurrentRoute() {
    switch(this.state.currentRoute) {
      case (routes.main): return this.renderMain()
      case (routes.gallery_form): return <FormGallery/>
      case (routes.gallery_list): return <ListGallery/>
      case (routes.SAMPLE_FORM): return this.createViewFromFormController(new SampleForm());
      case (routes.DIRECTIONS_FORM): return this.createViewFromFormController(new DirectionsForm());
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%'}}>
          {this.state.currentRoute != routes.main ? <Button title="Back" onPress={() => this.setState({currentRoute: routes.main})}/> : null}
          {this.renderCurrentRoute()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
