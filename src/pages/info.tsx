import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfoScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        marginTop: 30,
        marginLeft: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic" }}>
        How to use the app:
      </Text>

      <Text style={styles.text}>
        In the Home page you can enter food items with its calories to the
        "Enter Calories" field. When you press "Submit" the app will save the
        data you gave it and add the calories to the graph and history.
      </Text>

      <Text style={styles.text}>
        Also when you exercise using the polar OH1 or Verity sense with your
        account our application will fetch the saved data and filter out the
        burned calories from the data and show that in the graph with minus
        numbers.
      </Text>

      <Text style={styles.text}>
        In history you can see the food items and calories that you have eaten
        today, it also counts the total calories eaten.
      </Text>

      <Text style={styles.text}>
        In profile page you can see information of the account that you have
        logged in with.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 17,
  },
});
