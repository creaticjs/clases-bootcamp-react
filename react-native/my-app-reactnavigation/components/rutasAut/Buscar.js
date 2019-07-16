import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Buscar </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11ffaa",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Buscar;
