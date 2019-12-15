import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Understanding extends Component {

    state = {
        understanding: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    goNext = (event) => {
        this.props.dispatch({
            type: 'ENTER_UNDERSTANDING',
            payload: this.state,
        });
        console.log(this.state);
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
                    onChange={(event) => this.inputField(event, 'understanding')}
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>


            </div>
        );
    }
}
export default connect(mapStoreToProps)(Understanding);