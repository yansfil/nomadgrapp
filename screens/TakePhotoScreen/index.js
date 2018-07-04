import React from "react";
import AddPhotoNavigation from "../../navigation/AddPhotoNavigation"
import {View, StatusBar} from "react-native"

const TakePhotoScreen = props => (
    <View style={{flex : 1}}>
        <StatusBar hidden={true}/>
        <AddPhotoNavigation/>
    </View>
)

export default TakePhotoScreen