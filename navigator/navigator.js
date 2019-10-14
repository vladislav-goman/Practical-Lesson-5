import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Galerry from '../screens/galerry';
import SinglePhoto from '../screens/singlePhoto';

const Navigator = createStackNavigator(
  {
    Galerry,
    SinglePhoto
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#8a2be2"
      },
      headerTintColor: "white"
    },
    mode: "modal"
  }
);

export default createAppContainer(Navigator);