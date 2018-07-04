import React from "react"
import PropTypes from "prop-types"
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet} from "react-native"
import FadeIn from "react-native-fade-in-image"
import PhotoActions from "../PhotoActions"
import {withNavigation} from "react-navigation"

const {width, height} = Dimensions.get("window")

const Photo = props => (
    <View style={styles.photo}>
        <TouchableOpacity onPressOut={() =>
            props.navigation.navigate("ProfileDetail", {
                user: props.creator
            })
        }>
            <View style={styles.header}>
                <FadeIn>
                    <Image
                        source={
                            props.creator.profile_image ?
                                require("../../assets/dummy/hoyeon.jpg")
                                : require("../../assets/images/noPhoto.jpg")}
                        style={styles.avatar}
                    />
                </FadeIn>
                <View>
                    <Text>{props.creator.username}</Text>
                    {props.location && <Text style={styles.location}>{props.location}</Text>}
                </View>
            </View>
        </TouchableOpacity>
        <FadeIn>
            <Image
                source={{uri: props.file}}
                style={{width, height: props.is_vertical ? 300 : 300}}
            />
        </FadeIn>
        <View style={styles.photoMeta}>
            <PhotoActions
                isLiked={props.isLiked}
                likeCount={props.likeCount}
                handlePress={props.handlePress}/>
            <View style={styles.comment}>
                <Text style={styles.message}>{props.creator.username}{" "}
                    <Text>{props.caption}</Text>
                </Text>
            </View>
            {props.comments.length > 0 && (
                <TouchableOpacity onPressOut={() => props.navigation.navigate("Comments")}>
                    <View style={styles.commentsLink}>
                        {props.comments.legnth === 1 ? (
                            <Text style={styles.linkText}>View 1 Comment</Text>
                        ) : (
                            <Text style={styles.linkText}>View all {props.comments.length} comments</Text>
                        )}
                    </View>
                </TouchableOpacity>
            )}
            <Text style={styles.dateText}>{props.natural_time.toUpperCase()}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    photo: {
        marginBottom: 10
    },
    header: {
        paddingHorizontal: 15,
        flexDirection: "row",
        paddingVertical: 15,
        alignItems: "center",
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 1
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    author: {
        fontWeight: "600",
        marginBottom: 3,
        fontSize: 15
    },
    location: {
        fontSize: 12
    },
    photoMeta: {
        paddingHorizontal: 15,
    },
    comment: {
        marginTop: 5
    },
    comemntAuthor: {
        marginRight: 5,
        fontWeight: "600",
        fontSize: 14
    },
    message: {
        fontWeight: "400",
        fontSize: 15
    },
    commentsLink: {
        marginTop: 5
    },
    linkText: {
        fontSize: 14,
        color: "#999"
    },
    dateText: {
        color: "#9999",
        fontSize: 12,
        marginTop: 10
    }
})

export default withNavigation(Photo)