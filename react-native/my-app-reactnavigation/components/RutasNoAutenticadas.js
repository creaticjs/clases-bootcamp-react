import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./rutas/Login";
import Registrarse from "./rutas/Registrarse";

const RutasNoAutenticadas = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Registrarse: {
      screen: Registrarse
    }
  },
  { headerMode: "none" }
);

export default createAppContainer(RutasNoAutenticadas);
