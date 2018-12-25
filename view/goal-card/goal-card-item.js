import React, { Component } from 'react';
import {CardItem, Body, Text, Content, Icon} from 'native-base';
import { StyleSheet, ProgressViewIOS } from 'react-native';


export default class GoalCardItem extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
                     <CardItem style={styles.cardItemContainder}>
                        <Body>
                            <Text>
                                {this.props.levelNumber}
                            </Text>
                            <Text style={styles.textContainder}>
                                {this.props.description}
                            </Text>
                            <Text style={styles.textDateContainder}>
                                {this.props.goalDate}
                            </Text>
                            <ProgressViewIOS progress={this.props.progress} progressViewStyle="bar" progressTintColor="green" trackTintColor="red" style={styles.progressBarContainer}/>
                            <Icon type="FontAwesome" name="eye" />
                        </Body>
                    </CardItem>
        )
    }
};

const styles = StyleSheet.create({
    cardItemContainder: {
        margin: 0.5,
        backgroundColor: '#7fcaa7'
    },
    textContainder: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: 30,
    },
    textDateContainder: {
      color: 'black',
    },
    progressBarContainer: {
        width: 300,
    }
  });