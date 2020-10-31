import React from 'react';
import axios from 'axios';

const Home = (props) => {

    axios.get('http://localhost:8000/api/getConfig/').then(res => {
        console.log('%c res [SUCCESS]', 'color:#bada55;', res);
    }).catch(res => {
        console.log('%c res [FAILED]', 'color:#bada55;', res);
    })

    return <p>Hello from Home component </p>
}

export default Home;