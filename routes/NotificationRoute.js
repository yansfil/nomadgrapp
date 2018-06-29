import {createStackNavigator} from "react-navigation"
import NotificationScreen from "../screens/NotificationScreen"
import sharedRoutes, {sharedOptions} from "./SharedRoutes"


    const NotificationRoute = createStackNavigator({
        Notification: {
            screen: NotificationScreen,
            navigationOptions:{
                headerTitle:"Notification"
            }
        },
        ...sharedRoutes
    }, {
    ...sharedOptions
    }
);

export default NotificationRoute