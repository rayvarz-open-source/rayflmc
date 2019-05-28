import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { LabelElement as LabelElementD } from '../flmc/FormController/Elements/LabelElement'

type Props = {
    element: LabelElementD
}

type State = {
    title: string
}

export default class LabelElement extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            title: ""
        }
        
    }

    componentDidMount(){
        this.props.element.value.subscribe({
            next: v => this.setState({title: v})
        })
    }

    render() {
        return (
            <Text>{this.state.title}</Text>
        )
    }


}
