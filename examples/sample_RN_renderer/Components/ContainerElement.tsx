import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { ContainerElement as ContainerElementD, Direction } from '../flmc/FormController/Elements/ContainerElement'
import IElement from '../flmc/FormController/IElement';
import { ElementTypes } from '../flmc/FormController/Elements/ElementTypes';
import ButtonElement from './ButtonElement';
import TextInputElement from './TextInputElement';
import LabelElement from './LabelElement';

type Props = {
    element: ContainerElementD
}

type State = {
    direction: Direction,
    children: IElement[]
}

export default class ContainerElement extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            children: [],
            direction: Direction.Column
        }


    }

    componentDidMount() {
        
        this.props.element.directionValue.subscribe({
            next: v => this.setState({ direction: v })
        })

        this.props.element.childrenContainer.subscribe({
            next: v => this.setState({children: v})
        })
    }

    renderChildren() {
        return this.state.children.map((element, index) => {
            switch (element.type) {
                case (ElementTypes.Button): return <ButtonElement element={element as any} key={`btn_${index}`}/>
                case (ElementTypes.Container): return <ContainerElement element={element as any} key={`container_${index}`}/>
                case (ElementTypes.TextInput): return <TextInputElement element={element as any} key={`textinput_${index}`}/>
                case (ElementTypes.Label): return <LabelElement element={element as any} key={`lbl_${index}`}/>
                default: return <Text key={`txt_${index}`}>element type '{element.type}' is not supported</Text>
            }
        })
    }

    render() {
        return (
            <View style={{flexDirection: this.state.direction == Direction.Column ? "column" : "row"}}>
                {this.renderChildren()}
            </View>
        )
    }


}
