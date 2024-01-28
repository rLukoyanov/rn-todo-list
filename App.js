import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Yours goal"
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
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
  inputContainer: {
    flex: 1,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
