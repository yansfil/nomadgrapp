import {createMaterialTopTabNavigator} from "react-navigation"
import CameraScreen from "../screens/CameraScreen"
import LibraryScreen from "../screens/LibraryScreen"

const AddPhotoNavigations = createMaterialTopTabNavigator({
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarLabel: "photo"
            }
        },
        Library: {
            screen: LibraryScreen,
            navigationOptions: {
                tabBarLabel: "library"
            }
        }
    },
    {
        swipeEnabled : true,
        animationEnabled : true,
        tabBarOptions:{
            showLabel: true,
            labelStyle:{
                fontSize : 14,
                fontWeight : "600"
            },
            showIcons : false,
            backgroundColor : "white"
        }
    })

export default AddPhotoNavigations
