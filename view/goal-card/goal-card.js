import React, { Component } from 'react';
import { Container, Header, Card, Body, Title } from 'native-base';
import GoalCardItem from './goal-card-item';


export default class GoalCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>{this.props.name}</Title>
                    </Body>
                </Header>
                <Card>
                    <GoalCardItem description={this.props.description}/>
                    <GoalCardItem description={this.props.description}/>
                    <GoalCardItem description={this.props.description}/>
                </Card>
            </Container>
        )
    }
};
