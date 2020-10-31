import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import SignIn from '../../components/SignIn/SignIn';
// import SignUp from '../../components/SignUp/SignUp';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isSignIn: true
        }
    }
    testClick = () => {
        this.props.onTestValueChange("New Test Value!")
    };
    render() {
        return (
            <Fragment>
                <SignIn />
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTestValueChange: (value) => dispatch(actionCreators.changeTestType(value))
    }
}
const mapStateToProps = (state) => {
    return {
        testValue: state.testValue
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);