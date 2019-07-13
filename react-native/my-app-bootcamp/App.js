import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

export default class App extends React.Component {
  state = {
    titulo: "App de listas en Creatic",
    tareas: [{ nombre: "Jugar Xbox" }, { nombre: "Comer" }]
  };
  render() {
    return (
      <View style={styles.container}>
        <Header titulo={this.state.titulo} />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaff00"
  },

  rojo: {
    color: "red"
  }
});
