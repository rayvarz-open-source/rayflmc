import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { map, filter } from 'rxjs/operators';

export default class TextInputElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        props.element.value.subscribe({
            value: v => this.setState({value: v})
        })
        
    }

    onChange(text) {
        if (text == this.props.element.value.value) return;
        this.props.element.value.next(text);
    }

    render() {
        return (
            <TextInput
                value={this.state.value}
                onChangeText={(v) => this.onChange(v)}
            />
        )
    }


}
