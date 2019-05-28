import { Component } from "react";
import ListController from "../flmc/ListController/ListController";
import React from "react";
import { View, TextInput, Button, Text } from "react-native";


type Props = {
    controller: any
}

type State = {
    isPagable: boolean,
    isSearchable: boolean,
    currentPage: number,
    isLoading: boolean,
    searchText: string,
    items: any[],
}

export default class ListElementView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isPagable: this.props.controller.isPagable(),
            isSearchable: this.props.controller.isSearchable(),
            currentPage: 0,
            isLoading: false,
            searchText: "",
            items: [],
        }
    }

    componentDidMount() {
        this.props.controller.refreshPage();
        this.props.controller.getCurrentPageNumber().subscribe({
            next: (v: number) => this.setState({currentPage: v})
        });
        this.props.controller.getSearchText().subscribe({
            next: (v: string) => this.setState({searchText: v})
        });
        this.props.controller.datasource.values.subscribe({
            next: (v: any) => this.setState({items: v})
        });
    }

    searchContainer() {
        return <TextInput
            value={this.state.searchText}
            onChange={(v) => this.props.controller.setSearchText(v)}
            style={{backgroundColor: 'rgb(250,250,250)'}}
        />
    }

    renderItem(item: any) {
        let fields = [];
        let cnter = 0;
        for (let prop in item) {
            cnter++;
            fields.push(
                <Text key={`${cnter}_inner_field`}>{`${prop} : ${item[prop]}`}</Text>
            );
        }
        return fields;
    }

    renderItems() {
        return this.state.items.map(item => {
            return <View style={{flexDirection: 'column', borderColor: 'black', borderWidth: 1, margin: 10, padding: 5}}>
                {this.renderItem(item)}
            </View>
        })
    }

    pagableContainer() {
        return <Button title={this.state.isLoading ? "Loading..." : `Load More\nCurrent Page:${this.state.currentPage}`} onPress={() => {
            if(this.state.isLoading) return;
            this.props.controller.nextPage();
        }}/>
    }

    render() {
        return (
            <View style={{flexDirection: 'column'}}>
                {this.state.isSearchable ? this.searchContainer() : null}
                {this.renderItems()}
                {this.state.isPagable ? this.pagableContainer() : null}
            </View>
        )
    }

}