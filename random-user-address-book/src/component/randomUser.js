import React, { Component } from 'react';
import axios from 'axios';
import StatusButton from './randomUserButton';

class AddressResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api?results=25')
        .then(res => {
            const results = res.data.results
            this.setState({results})
            console.log("The results are in:", results)
        })
    }

    componentDidUpdate() {
        console.log("We've updated, Frank!")
        console.log("The state is:", this.state.results)
    }

    render() {
        return (
            <div>
                <h2>Address Book</h2>
                <ul>
                    {this.state.results.map((result, index) => {
                        return (
                            <li>
                                <StatusButton result={result} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AddressResults;