import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#b8bcbb"
  },
  item: {
    fontSize: 18,
    height: 50,
    padding: 15
  }
});
export default ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.item}>{item.title}</Text>
  </View>
);
