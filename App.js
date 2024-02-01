import { useState } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
    endAddGoalHandler();
  }
  return (
    <View style={styles.container}>
      <Button
        title="add new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <GoalItem
              text={goal.text}
              key={goal.key}
              onGoalDelete={deleteGoalHandler}
              id={goal.key}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
