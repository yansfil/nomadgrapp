import {FB_APP_ID} from "../../constants";
import {AsyncStorage} from "react-native";
import {Facebook} from "expo"
// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// Action Creators

function setLogIn(token) {
    return {
        type: LOG_IN,
        token
    };
}

function setLogOut() {
    return {type: LOG_OUT};
}

function setUser(user) {
    return {
        type: SET_USER,
        user
    };
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
            username: "nomadmin",
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
                username: "nomadmin",
                website: null
            }
        }

        const {type, token} = await Facebook.logInWithReadPermissionsAsync(
            FB_APP_ID,
            {permissions: ["public_profile", "email"]}
        );
        console.log(type,token)
        if(type === "success"){
            if (json.user && json.token) {
                dispatch(setLogIn(json.token));
                dispatch(setUser(json.user));
                return true
            } else {
                return false
            }
        }else{
            return false
        }
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

async function applyLogOut(state, action) {
    await AsyncStorage.clear();
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

// Exports

const actionCreators = {
    login,
    facebookLogin
};

export {actionCreators};
// Default Reducer Export

export default reducer;