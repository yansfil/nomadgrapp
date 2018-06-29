import {createStackNavigator} from "react-navigation"
import TakePhotoScreen from "../screens/TakePhotoScreen"
import TabsNavigation from "./TabsNavigation"

const RootNavigation = createStackNavigator({
        Tabs :{
            screen : TabsNavigation,
            navigationOptions : {
                header : null
            }
        },
        TakePhoto:{
            screen : TakePhotoScreen,
            navigationOptions :{
                header : null
            }
        }
    }, {
        mode: "modal" //위에서 튀어나옴

    }
)

export default RootNavigation