import { createStackNavigator } from "react-navigation";

import Home from "./Home";
import Detalle from "./Detalle";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Detalle: {
    screen: Detalle
  }
});

export default HomeStack;
