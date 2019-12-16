import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Understanding extends Component {

    state = {
        understanding: '',
    }

    //GET INFO FROM INPUT FIELD

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    //SEND INFO OFF TO REDUX AND SEND USER TO NEXT PAGE ON BUTTON CLICK

    goNext = (event) => {
        this.props.dispatch({
            type: 'ENTER_UNDERSTANDING',
            payload: this.state,
        });
        this.props.history.push('/Supported')
    };

    //SEND USER BACK TO PREVIOUS PAGE ON BUTTON CLICK

    goBack = (event) => {
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <h2>How well are you understanding the content??</h2>
                <h4>Enter a number between 1-5</h4>
                <input
                    type="number"
                    placeholder="Understanding?"
                    onChange={(event) => this.inputField(event, 'understanding')}
                    required
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>


            </div>
        );
    }
}
export default connect(mapStoreToProps)(Understanding);