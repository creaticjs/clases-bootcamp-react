import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Login </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate("Registrarse");
          }}
          title="ir Registrarse"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaffaa",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;
