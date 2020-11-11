import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

// Components
import AutoComplete from '../../components/UI/AutoComplete/AutoComplete';

class MainMenu extends Component {
    showConfig = () => {
        console.log('%c *-*-* showConfig *-*-*', 'color:#bada55;', this.props);
    }
    render() {
        return (
            <div>
                <p>MainMenu</p>
                {this.props.modalActive ? <p>Modal Active</p> : <p>Modal Closed</p>}
                <AutoComplete />

                <button onClick={this.showConfig}>CONFIG</button>
                <button onClick={this.props.modalTrigger}>Modal</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        config: state.config,
        modalActive: state.modalActive
    }
}
const mapDispatchToProps = dispatch => {
    return {
        modalTrigger: () => dispatch(actionCreators.modalToggle())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);