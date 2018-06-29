import {createStackNavigator} from "react-navigation"
import SearchScreen from "../screens/SearchScreen"
import sharedRoutes, {sharedOptions} from "./SharedRoutes"


const SearchRoute = createStackNavigator({
        Search: {
            screen: SearchScreen
        },
        ...sharedRoutes
    }, {
    ...sharedOptions
    }
);

export default SearchRoute