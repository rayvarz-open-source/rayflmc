import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default class ButtonElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            callback: () => {},
            title: ""
        }
        props.element.buttonCallback.subscribe({
            next: v => this.setState({callback: v})
        })

        props.element.buttonText.subscribe({
            next: v => this.setState({title: v})
        })
        
    }

    render() {
        return (
            <Button title={this.state.title} onPress={this.state.onPress}></Button>
        )
    }


}