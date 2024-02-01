import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Yours goal"
        />
        <View style={styles.buttonContaine}>
          <View>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonContaine: {
    marginTop: 16,
    flexDirection: "row",
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
});
