import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default class LabelElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

        props.element.value.subscribe({
            next: v => this.setState({title: v})
        })
        
    }

    render() {
        return (
            <Text>title</Text>
        )
    }


}
