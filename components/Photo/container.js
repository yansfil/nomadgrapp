import React, {Component} from "react"
import PropTypes from "prop-types"
import Photo from "./presenter"

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked: props.is_liked,
            likeCount: props.like_count
        }
    }

    static propTypes = {
        dispatchLike: PropTypes.func.isRequired
    }

    render() {
        return <Photo {...this.props} {...this.state} handlePress={this._handlePress}/>;
    }

    _handlePress = () => {
        const {dispatchLike} = this.props
        const {isLiked} = this.state
        dispatchLike(isLiked)
        if (isLiked) {
            this.setState(prevState => {
                return {
                    isLiked: false,
                    likeCount: prevState.likeCount - 1
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    isLiked: true,
                    likeCount: prevState.likeCount + 1
                }
            })
        }


    }

}

Photo.propTypes = {
    id: PropTypes.number.isRequired,
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired,
    is_vertical: PropTypes.bool.isRequired,
    handlePress: PropTypes.func.isRequired
};

export default Container