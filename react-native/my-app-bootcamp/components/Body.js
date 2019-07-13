import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ nombre: "Jugar Xbox" }, { nombre: "Comer" }]}
          renderItem={({ item }) => {
            return <Text>{item.nombre}</Text>;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "#ff9800"
  }
});

export default Body;
