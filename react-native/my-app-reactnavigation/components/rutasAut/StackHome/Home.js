import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate("Detalle");
          }}
          title="ir a Detalle"
        >
          {" "}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaaaff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
