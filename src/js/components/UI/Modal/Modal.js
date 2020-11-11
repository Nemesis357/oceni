import React from 'react';
import { connect } from 'react-redux';

class Modal extends React.Component {
    render() {
        return (
            <div className={`Modal ${this.props.modalActive ? 'active' : null}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        modalActive: state.modalActive
    }
}

export default connect(mapStateToProps)(Modal);