import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Registrarse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Registrarse </Text>
        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
          title="volver al Login"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaff55",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Registrarse;
