import React, { Component } from 'react';
import { ScrollView, Text, AppRegistry} from 'react-native';
import GoalCard from './view/goal-card/goal-card';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <GoalCard description="Goal 1" name="Goal name 1"/>
        <GoalCard description="Goal 2" name="Goal name 2"/>
        <GoalCard description="Goal 3" name="Goal name 3"/>
        <GoalCard description="Goal 4" name="Goal name 4"/>
        <GoalCard description="Goal 5" name="Goal name 5"/>
        <GoalCard description="Goal 6" name="Goal name 6"/>
        <GoalCard description="Goal 7" name="Goal name 7"/>
        <GoalCard description="Goal 8" name="Goal name 8"/>
        <GoalCard description="Goal 9" name="Goal name 9"/>
        <GoalCard description="Goal 10" name="Goal name 10"/>
      </ScrollView>
  );
}
}

AppRegistry.registerComponent('7Levels', () => App);