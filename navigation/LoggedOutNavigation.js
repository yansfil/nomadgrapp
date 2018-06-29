import { createStackNavigator } from "react-navigation";
import LogInScreen from "../screens/LoginScreen";
import React from "react"

export default createStackNavigator({
    Home: {
        screen: LogInScreen,
        navigationOptions:{
            header : null
        }
    }
});