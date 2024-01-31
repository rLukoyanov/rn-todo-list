import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  function deleteGoalHandler() {}
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <GoalItem
              text={goal.text}
              key={goal.key}
              onGoalDelete={deleteGoalHandler}
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
