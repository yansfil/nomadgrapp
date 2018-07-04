import {API_URL} from "../../constants";
import {actionCreators as userActions} from "./user";

// Actions

const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";
const SET_LIKE = "SET_LIKE";
const SET_UNLIKE = "SET_UNLIKE";

// Action Creators

function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    };
}

function setSearch(search) {
    return {type: SET_SEARCH, search};
}

function setlike(feed){
    return{
        type: SET_LIKE,
        feed
    }
}
function setUnlike(feed){
    return{
        type: SET_UNLIKE,
        feed
    }
}


//API Actions

function getFeed() {
    return (dispatch, getState) => {

        const json = [{
            id: 1,
            creator: {
                profile_image: "../../assets/dummy/hoyeon.jpg",
                username: "이호연",
                following: 5
            },
            location: "Seoul, Korea",
            file: "1",
            like_count: 5,
            caption: "호롤로로~1",
            comments: [{
                id: 1,
                message: "1번 메세지",
                creator: {
                    profile_image: "../../assets/dummy/jeongwook.png",
                    username: "유정욱"
                }
            }],
            natural_time: "10 days ago",
            is_liked: false,
            is_vertical : true
        }, {
            id: 2,
            creator: {
                profile_image: "../../assets/dummy/jeongwook.png",
                username: "유정욱"
            },
            location: "Beijung, China",
            file: "2",
            like_count: 2,
            caption: "호롤로로~2",
            comments: [{
                id: 2,
                message: "2번 메세지",
                creator: {
                    profile_image: "../../assets/dummy/hoyeon.jpg",
                    username: "이호연"
                }
            }],
            natural_time: "7 days ago",
            is_liked: true,
            is_vertical : true
        }, {
            id: 3,
            creator: {
                profile_image: "../../assets/dummy/seoji.png",
                username: "서지환"
            },
            location: "Busan, Seoul",
            file: "3",
            like_count: 5,
            caption: "호롤로로~3",
            comments: [],
            natural_time: "18 days ago",
            is_liked: true,
            is_vertical: true
        }]
        dispatch(setFeed(json))
    }
}

function getSearch() {

    const json = [{
        id: 1,
        creator: {
            profile_image: "../../assets/dummy/hoyeon.jpg",
            username: "이호연"
        },
        location: "Seoul, Korea",
        file: "1",
        like_count: 5,
        caption: "호롤로로~1",
        comments: [{
            id: 1,
            message: "1번 메세지",
            creator: {
                profile_image: "../../assets/dummy/jeongwook.png",
                username: "유정욱"
            }
        }],
        natural_time: "10 days ago",
        is_liked: false,
        is_vertical : true
    }, {
        id: 2,
        creator: {
            profile_image: "../../assets/dummy/jeongwook.png",
            username: "유정욱"
        },
        location: "Beijung, China",
        file: "2",
        like_count: 2,
        caption: "호롤로로~2",
        comments: [{
            id: 2,
            message: "2번 메세지",
            creator: {
                profile_image: "../../assets/dummy/hoyeon.jpg",
                username: "이호연"
            }
        }],
        natural_time: "7 days ago",
        is_liked: true,
        is_vertical : true
    }]

    return (dispatch, getState) => {
        dispatch(setSearch(json))
    }
}

function searchByHashtag(hashtag){
    const json = [{
        id: 1,
        creator: {
            profile_image: "../../assets/dummy/hoyeon.jpg",
            username: "이호연"
        },
        location: "Seoul, Korea",
        file: "1",
        like_count: 5,
        caption: "호롤로로~1",
        comments: [{
            id: 1,
            message: "1번 메세지",
            creator: {
                profile_image: "../../assets/dummy/jeongwook.png",
                username: "유정욱"
            }
        }],
        natural_time: "10 days ago",
        is_liked: false,
        is_vertical : true
    }]

    return (dispatch, getState) => {
        setTimeout(()=>{
            dispatch(setSearch(json))
        },1000)
    }
}

function likePhoto(photoId){
    return (dispatch, getState) => {
        const {photos : {feed}} = getState()
        const updatedFeed = feed.map(item => {
            if(item.id == photoId){
                item.is_liked = true
                item.like_count = item.like_count + 1
            }
            return item
        })
        dispatch(setlike(updatedFeed))

        // return true
        // return
    }
}

function unlikePhoto(photoId){
    return (dispatch, getState) => {
        const {photos : {feed}} = getState()
        const updatedFeed = feed.map(item => {
            if(item.id == photoId){
                item.is_liked = false
                item.like_count = item.like_count - 1
            }
            return item
        })
        dispatch(setUnlike(updatedFeed))
    }
}

//Initial State

const initialState = {}

//Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_SEARCH:
            return applySetSearch(state, action);
        case SET_LIKE:
            return applySetLike(state, action);
        case SET_UNLIKE:
            return applySetUnlike(state, action);
        default:
            return state;
    }
}

// Reducer Actions

function applySetFeed(state, action) {
    const {feed} = action;
    return {
        ...state,
        feed
    };
}

function applySetSearch(state, action) {
    const {search} = action;
    return {
        ...state,
        search
    };
}

function applySetLike(state, action) {
    const {feed} = action;
    return {
        ...state,
        feed
    };
}

function applySetUnlike(state, action) {
    const {feed} = action;
    return {
        ...state,
        feed
    };
}

// Exports

const actionCreators = {
    getFeed,
    getSearch,
    likePhoto,
    unlikePhoto,
    searchByHashtag
};

export {actionCreators};

// Default Reducer Export

export default reducer;