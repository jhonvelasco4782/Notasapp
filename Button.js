import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00a9ff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  text: {
    color: "#fff",
    fontSize: 18
  }
});
export default ({ title, onPress }) => (
  <TouchableHighlight style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
);
