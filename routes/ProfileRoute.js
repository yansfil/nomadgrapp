import {createStackNavigator} from "react-navigation"
import ProfileScreen from "../screens/ProfileScreen"
import sharedRoutes, {sharedOptions} from "./SharedRoutes"


const ProfileRoute = createStackNavigator({
        Profile: {
            screen: ProfileScreen
        },
        ...sharedRoutes
    }, {
    ...sharedOptions
    }
);

export default ProfileRoute