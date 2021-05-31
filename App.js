import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,

} from "react-native";
import Item from "./Item";
import Button from "./Button";
import Input from "./Input";

export default class App extends React.Component {
  state = {
    data: [],
    isVisible: false,
    text: ""
  };
  handlePress = () => {
    this.setState({ isVisible: true });
  };

  handleChange = text => this.setState({ text });

  handleSave = () => {
    const { text, data } = this.state;
    const datos = [{ key: Math.random().toString(), title: text }].concat(data);
    this.setState({
      data: datos,
      isVisible: false,
      text: ""
    });
  };

  render() {
    const { data } = this.state;

    return (
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>
          <Text style={styles.title}>Mis Notas</Text>
        </View>
        <View style={styles.view}>
          <Button title="Nueva Nota" onPress={this.handlePress} />
        </View>
        <FlatList data={data} renderItem={Item} />
        <Modal animationType="slide" visible={this.state.isVisible}>
          <View style={[styles.container, styles.center]}>
            <Text style={styles.modalTitle}>Ingrese recordatorio</Text>
            <Input
              onChangeText={this.handleChange}
              placeholder="Recordatorio"
              value={this.state.text}
            />
            <Button title="Guardar" onPress={this.handleSave} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 28
  },
  view: {
    height: 50,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  gray: {
    backgroundColor: "#eee"
  },
  modalTitle: {
    fontSize: 28
  }
});
