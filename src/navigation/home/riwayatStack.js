import { createStackNavigator } from "react-navigation-stack";
import Riwayat from '../../screens/home/riwayat/Riwayat'

export default StackRiwayat = createStackNavigator(
  {
    Riwayat: {
      screen: Riwayat,
      navigationOptions: {
        headerShown: false
      },
    }
  },
  {
    initialRouteName: "Riwayat"
  }
);