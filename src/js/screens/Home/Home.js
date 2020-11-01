import React, { Component } from 'react';

import AutoComplete from '../../components/UI/AutoComplete/AutoComplete';

class Home extends Component {

    componentDidMount() {
        // axios.get('http://localhost:8000/api/city/1').then(res => {
        //     console.log('%c res [SUCCESS]', 'color:#bada55;', res);
        // }).catch(res => {
        //     console.log('%c res [FAILED]', 'color:#bada55;', res);
        // })
    }

    render() {
        return (
            <div>
                <p>Hello from Home component </p>
                <AutoComplete />
            </div>
        )
    }
}

export default Home;