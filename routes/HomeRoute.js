import {createStackNavigator} from "react-navigation"
import FeedScreen from "../screens/FeedScreen"
import sharedRoutes, {sharedOptions} from "./SharedRoutes"


const HomeRoute = createStackNavigator({
        Home: {
            screen: FeedScreen
        },
        ...sharedRoutes
    }, {
    ...sharedOptions
    }
);

export default HomeRoute