import {FB_APP_ID} from "../../constants";
import {AsyncStorage} from "react-native";
import {Facebook} from "expo"
// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATION = "SET_NOTIFICATION";

// Action Creators

function setLogIn(token) {
    return {
        type: LOG_IN,
        token
    };
}

function logOut() {
    return {type: LOG_OUT};
}

function setUser(user) {
    return {
        type: SET_USER,
        user
    };
}

function setNotifications(notifications) {
    return {
        type: SET_NOTIFICATION,
        notifications
    }
}

// API Actions (Only Local for me!!)
function login(username, password) {
    const json = {
        token: "abcdefg",
        user: {
            bio: null,
            followers_count: 0,
            following_count: 4,
            images: [],
            name: "",
            post_count: 0,
            profile_image: null,
            username: "hoyeon",
            website: null
        }
    }
    return dispatch => {
        if (username == 'no') {
            return false
        } else {
            if (json.user && json.token) {
                dispatch(setLogIn(json.token));
                dispatch(setUser(json.user));
                return true
            } else {
                return false
            }
        }
    }
}

function facebookLogin() {
    return async dispatch => {

        const json = {
            token: "abcdefg",
            user: {
                bio: null,
                followers_count: 0,
                following_count: 4,
                images: [],
                name: "",
                post_count: 0,
                profile_image: null,
                username: "hoyeon",
                website: null,
                is_self : true
            }
        }

        const {type, token} = await Facebook.logInWithReadPermissionsAsync(
            FB_APP_ID,
            {permissions: ["public_profile", "email"]}
        );
        if (type === "success") {
            if (json.user && json.token) {
                dispatch(setLogIn(json.token));
                dispatch(setUser(json.user));
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

function getNotifications() {
    return (dispatch, getState) => {
        const json = [{
            comment: "Hello1",
            created_at: "2016-11-28",
            creator: {
                followers_count: 10,
                following: true,
                following_count: 25,
                id: 3,
                name: "Jeongwook You",
                username: "jeongnong",
                post_count: 2,
                profile_image: "",
                website: null
            },
            id: 1,
            image: {
                file: ""
            },
            notification_type: "like",
            to: 1,
            updated_at: "2016-11-29"
        }, {
            comment: "Hello2",
            created_at: "2016-10-28",
            creator: {
                followers_count: 5,
                following: false,
                following_count: 10,
                id: 2,
                name: "Jihwan Seo",
                username: "seoji",
                post_count: 2,
                profile_image: "",
                website: null
            },
            id: 2,
            image: {
                file: ""
            },
            notification_type: "comment",
            to: 1,
            updated_at: "2016-10-29"
        }, {
            comment: "Hello3",
            created_at: "2016-12-28",
            creator: {
                followers_count: 1,
                following: false,
                following_count: 1,
                id: 4,
                name: "Hansaem You",
                username: "HanSaek",
                post_count: 2,
                profile_image: "",
                website: null
            },
            id: 3,
            image: {
                file: ""
            },
            notification_type: "follow",
            to: 1,
            updated_at: "2016-12-29"
        }]
        dispatch(setNotifications(json))
    }
}

function getOwnProfile() {
    return (dispatch, getState) => {
        const json = {
            bio: null,
            followers_count: 3,
            following_count: 4,
            images: [],
            name: "hoyeon",
            post_count: 5,
            profile_image: null,
            username: "hoyeon",
            website: null,
            is_self: true,
            images: [{
                id: 1,
                file: "",
                creator:{},
                comments:[],
                natural_time : ""
            }, {
                id: 2,
                file: "",
                creator:{},
                comments:[],
                natural_time : ""
            }, {
                id: 3,
                file: "",
                creator:{},
                comments:[],
                natural_time : ""
            }, {
                id: 4,
                file: "",
                creator:{},
                comments:[],
                natural_time : ""
            }
            ]
        }
        dispatch(setUser(json))
    }
}

function followUser(userId) {
    const user = {
        bio: null,
        followers_count: 0,
        following_count: 4,
        images: [],
        name: "hoyeon",
        post_count: 0,
        profile_image: null,
        username: "orang",
        website: null
    }
    return (dispatch, getState) => {
        return true
    }
}

function unfollowUser(userId) {
    const user = {
        bio: null,
        followers_count: 0,
        following_count: 4,
        images: [],
        name: "hoyeon",
        post_count: 0,
        profile_image: null,
        username: "orang",
        website: null
    }
    return (dispatch, getState) => {
        return true
    }
}

// Initial State

const initialState = {
    isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return applyLogIn(state, action);
        case LOG_OUT:
            return applyLogOut(state, action);
        case SET_USER:
            return applySetUser(state, action);
        case SET_NOTIFICATION:
            return applySetNotifications(state, action);
        default:
            return state;
    }
}

// Reducer Functions

function applyLogIn(state, action) {
    const {token} = action;
    return {
        ...state,
        isLoggedIn: true,
        token
    };
}

function applyLogOut(state, action) {
    AsyncStorage.clear(); //TODO Error!
    return {
        ...state,
        isLoggedIn: false,
        token: ""
    };
}

function applySetUser(state, action) {
    const {user} = action;
    return {
        ...state,
        profile: user
    };
}

function applySetNotifications(state, action) {
    const {notifications} = action;

    return {
        ...state,
        notifications
    }
}

// Exports

const actionCreators = {
    login,
    facebookLogin,
    logOut,
    getNotifications,
    getOwnProfile,
    followUser,
    unfollowUser
};

export {actionCreators};
// Default Reducer Export

export default reducer;