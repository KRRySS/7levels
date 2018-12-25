import React, { Component } from 'react';
import { ScrollView, Text, AppRegistry} from 'react-native';
import GoalCard from './view/goal-card/goal-card';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <GoalCard description="Goal 1" name="Goal name 1" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 2" name="Goal name 2" goalDate="2020" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 3" name="Goal name 3" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 4" name="Goal name 4" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 5" name="Goal name 5" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 6" name="Goal name 6" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 7" name="Goal name 7" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 8" name="Goal name 8" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 9" name="Goal name 9" goalDate="2019" inpirationFrom="Tom Hanks"/>
        <GoalCard description="Goal 10" name="Goal name 10" goalDate="2019" inpirationFrom="Tom Hanks"/>
      </ScrollView>
  );
}
}

AppRegistry.registerComponent('7Levels', () => App);