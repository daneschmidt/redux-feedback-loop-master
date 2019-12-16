import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Supported extends Component {

    state = {
        support: '',
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
            type: 'ENTER_SUPPORT',
            payload: this.state,
        });
        this.props.history.push('/comments')
    };

    //SEND USER BACK TO PREVIOUS PAGE ON BUTTON CLICK

    goBack = (event) => {
        this.props.history.push('/Understanding');
    }


    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <h4>Enter a number between 1-5</h4>
                <input
                    type="number"
                    placeholder="Support?"
                    onChange={(event) => this.inputField(event, 'support')}
                    required
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>
            </div>
        );
    }
}
export default connect(mapStoreToProps)(Supported);