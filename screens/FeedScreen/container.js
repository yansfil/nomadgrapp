import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";
import { Image,Text } from "react-native";
import NavButton from "../../components/NavButton";

class Container extends Component {
    static propTypes = {
        feed: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    };
    state = {
        isFetching: false
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                isFetching: false
            });
        }
    };

    render() {
        console.log(this.props)
        return (
           <FeedScreen {...this.props} {...this.state} refresh={this._refresh} />
        );
    }
    _refresh = () => {
        const { getFeed } = this.props;
        this.setState({
            isFetching: true
        });
        getFeed();
    };
}

export default Container;