import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { ButtonElement as ButtonElementD, OnTapCallBack } from '../flmc/FormController/Elements/ButtonElement'

type Props = {
    element: ButtonElementD
}

type State = {
    callback: OnTapCallBack,
    title: string,
}

export default class ButtonElement extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            callback: () => { },
            title: ""
        }

    }


    componentDidMount() {
        this.props.element.buttonCallback.subscribe({
            next: v => this.setState({ callback: v })
        })

        this.props.element.buttonText.subscribe({
            next: v => this.setState({ title: v })
        })
    }

    render() {
        return (
            <Button title={this.state.title} onPress={() => this.state.callback()}></Button>
        )
    }


}