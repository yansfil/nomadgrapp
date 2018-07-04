import React from "react"
import {View} from "react-native"
import {createBottomTabNavigator, TabBarBottom} from "react-navigation"
import HomeRoute from "../routes/HomeRoute"
import SearchRoute from "../routes/SearchRoute"
import NotificationRoute from "../routes/NotificationRoute"
import ProfileRoute from "../routes/ProfileRoute"
import {Ionicons} from "@expo/vector-icons"

const TabsNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomeRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "ios-home" : "ios-home-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        Search: {
            screen: SearchRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "ios-search" : "ios-search-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        AddPhoto: {
            screen: View,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={'ios-add-circle-outline'} size={30} color={'black'} />
                ),
                tabBarOnPress: () => {
                    // Works!
                    navigation.navigate("TakePhoto");
                },
            }),
        },
        Notifications: {
            screen: NotificationRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "ios-heart" : "ios-heart-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        },
        Profile: {
            screen: ProfileRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "ios-person" : "ios-person-outline"}
                        size={30}
                        color={"black"}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: "#FBFBFB",
                height: 45
            }
        }
    }
);

export default TabsNavigation;
