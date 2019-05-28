import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { map, filter } from 'rxjs/operators';
import { TextInputElement as TextInputElementD } from '../flmc/FormController/Elements/TextInputElement';

type Props = {
    element: TextInputElementD
}

type State = {
    value: string
}

export default class TextInputElement extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: ""
        }

        props.element.value.subscribe({
            next: v => this.setState({value: v})
        })
        
    }

    onChange(text: string) {
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
