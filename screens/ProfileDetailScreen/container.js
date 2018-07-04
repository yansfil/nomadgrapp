import React, {Component} from "react"
import PropTypes from "prop-types"
import Profile from "../../components/Profile"

class Container extends Component {
    static navigationOptions = ({navigation}) => ({
        title : navigation.state.params.user.username
    })
    render() {
        const {navigation : {state : {params : {user}}}} = this.props
        return <Profile profileObject={user} />
    }
}

export default Container

