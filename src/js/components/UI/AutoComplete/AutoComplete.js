import React, { Component } from 'react';
import axios from 'axios';

class AutoComplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            cities: []
        }

    }

    handleSearch = (e) => {
        if ( e.target.value !== "" ) {
            axios.post('http://localhost:8000/api/cityAutocomplete', {search: e.target.value})
                .then( res => {
                    this.setState({
                        cities: res.data
                    })
                })
                .catch( res => {
                    console.log('%c [FAIL] ', 'color:#bada55;', res);
                })
        } else {
            this.setState({
                cities: []
            })
        }

        this.setState({
            search: e.target.value
        })
    }

    render() {
        const citiesList = this.state.cities.map(city => <li key={city.id}>{city.name}</li>)
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.search}
                    onChange={this.handleSearch} 
                    className="AutoComplete-input"
                    ref="acInput"
                    placeholder="Grad"
                />
                <ul>
                    { citiesList }
                </ul>
            </div>
        );
    }
}

export default AutoComplete;