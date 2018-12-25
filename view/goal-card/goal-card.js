import React, { Component } from 'react';
import { Container, Header, Card, Body, Title, Footer, Text, View } from 'native-base';
import GoalCardItem from './goal-card-item';
import { StyleSheet } from 'react-native';


export default class GoalCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header>
                    <Body>
                        <Title>{this.props.name}</Title>
                    </Body>
                </Header>
                <Card>
                    <GoalCardItem description={this.props.description} goalDate={this.props.goalDate} progress={0.22} levelNumber="1"/>
                    <GoalCardItem description={this.props.description} goalDate={this.props.goalDate} progress={0.98} levelNumber="2"/>
                    <GoalCardItem description={this.props.description} goalDate={this.props.goalDate} progress={0.11} levelNumber="3"/>
                </Card>
                <Footer style={styles.foterContainer}>
                    <Body>
                        <Text style={styles.baseText}>Inspiration from: {this.props.inpirationFrom}</Text>
                    </Body>
                </Footer>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#27b466',
    },
    cardContainder: {
        margin: 10,
    },
    foterContainer: {
        backgroundColor: 'orange'
    },
    baseText: {
        margin: 10,
        textAlign: 'center',
    }
  });