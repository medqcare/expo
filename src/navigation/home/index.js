import { createStackNavigator } from "react-navigation-stack"
import doctorStack from './doctorStack'
import hospitalStack from './hospitalStack'
import Home from '../../screens/home/dashboard/Home'
import ScanMe from '../../screens/home/dashboard/ScanMe'
import Appointment from '../../screens/home/appointment/AppointmentList'
import medicalStats from './medresStack'
import AllergyStack from './allergystack'
import Undefined from '../../screens/404'
import profileStack from '../profile'
import SignStack from '../profile/signStack'

export default StackHome = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    }
  },
  Doctor: {
    screen: doctorStack,
    navigationOptions: {
      headerShown: false
    }
  },
  ScanMe: {
    screen: ScanMe,
    navigationOptions: {
      headerShown: false
    }
  },
  Hospital: {
    screen: hospitalStack,
    navigationOptions: {
      headerShown: false
    }
  },
  Appointment: {
    screen: Appointment,
    navigationOptions: {
      headerShown: false,
    }
  },
  MedicalStats: {
    screen: medicalStats,
    navigationOptions: {
      headerShown: false,
    }
  },
  Allergy: {
    screen: AllergyStack,
    navigationOptions: {
      headerShown: false
    }
  },
  ProfileStack: {
    screen: profileStack,
    navigationOptions: {
      headerShown: false
    }
  },
  Sign: {
    screen: SignStack,
    navigationOptions: {
        headerShown: false
    }
},
  Undefined: {
    screen: Undefined,
    navigationOptions: {
      headerShown: false,
    }
  },
}, {
  initialRouteName: 'Home'
})

StackHome.navigationOptions = ({ navigation }) => {
  console.log(navigation.state.index, 'Ini adalah jumlah stack di home')
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};