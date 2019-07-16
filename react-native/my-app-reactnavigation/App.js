import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RutasNoAutenticadas from "./components/RutasNoAutenticadas";
import RutasAutenticadas from "./components/RutasAutenticadas";
export default function App() {
  return <RutasAutenticadas />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
