import React, { Component } from 'react';
import {CardItem, Body, Text} from 'native-base';


export default class GoalCardItem extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
                    <CardItem>
                        <Body>
                            <Text>
                                {this.props.description}
                            </Text>
                        </Body>
                    </CardItem>
        )
    }
};
