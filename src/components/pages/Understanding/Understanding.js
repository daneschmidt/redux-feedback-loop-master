import React, { Component } from 'react';


class Understanding extends Component {

    state = {
        understanding: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    goNext = (event) => {
        this.props.history.push('/Supported')
    };

    goBack = (event) => {
        this.props.history.push('/');
    }



    render() {
        return (
            <div>
                <h2>How well are you understanding the content??</h2>
                <input
                    type="number"
                    placeholder="Understanding?"
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>


            </div>
        );
    }
}
export default Understanding;