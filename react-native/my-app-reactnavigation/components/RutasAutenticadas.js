import React from "react";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeStack from "./rutasAut/StackHome/HomeStack";
import Buscar from "./rutasAut/Buscar";
import Publicar from "./rutasAut/Publicar";
import Megustas from "./rutasAut/Megustas";

const RutasAutenticadas = createBottomTabNavigator({
  Home: HomeStack,
  Buscar: Buscar,
  Publicar: Publicar,
  Megustas: Megustas
});

export default createAppContainer(RutasAutenticadas);
