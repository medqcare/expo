import { createAppContainer, } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'
import Otpp from '../../screens/profile/resetpassword/otp'
import AllertEmail from '../../screens/profile/resetpassword/allertEmailConfirmation'
import ResetPasswordd from '../../screens/profile/resetpassword/resetPassword'
import ResetPassworddEmail from '../../screens/profile/resetpassword/resetPasswordEmail'
import ResetPassworddPhone from '../../screens/profile/resetpassword/resetPasswordPhone'



const resetPasswordStack = createStackNavigator({
    Ottp:{
        screen: Otpp,
        navigationOptions:{
            headerShown: false
        }
    },
    allertEmail: {
        screen: AllertEmail,
        navigationOptions:{
            headerShown: false
        }
    },
    ResetPassword: {
        screen:  ResetPasswordd,
        navigationOptions: {
            headerShown: false
        }
    },
    ResetPasswordEmail:{
        screen: ResetPassworddEmail,
        navigationOptions:{
            headerShown: false
        }
    },
    ResetPasswordPhone:{
        screen: ResetPassworddPhone,
        navigationOptions:{
            headerShown: false
        }
    }
}, {
    initialRouteName: 'ResetPassword'
})

export default createAppContainer(resetPasswordStack)