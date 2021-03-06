import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.blanco}>{this.props.titulo} </Text>
        <TextInput
          onChangeText={this.props.eventoTextAdd}
          style={styles.addTarea}
          placeholder="Ingresa la tarea"
          onSubmitEditing={() => {
            this.props.agregar();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#482880",
    justifyContent: "center"
  },
  blanco: {
    color: "#ffffff"
  },
  addTarea: {
    alignItems: "flex-end",
    backgroundColor: "#88ff",
    fontSize: 24,
    paddingHorizontal: 16
  }
});

export default Header;
