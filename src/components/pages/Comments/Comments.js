import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Comments extends Component {


    state = {
        comments: '',
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
            type: 'ENTER_COMMENTS',
            payload: this.state,
        });
        this.props.history.push('/submit')
    };

    //SEND USER BACK TO PREVIOUS PAGE ON BUTTON CLICK

    goBack = (event) => {
        this.props.history.push('/supported');
    }


    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <input
                    type="text"
                    placeholder="Comments?"
                    onChange={(event) => this.inputField(event, 'comments')}
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>
            </div>
        );
    }
}
export default connect(mapStoreToProps)(Comments);