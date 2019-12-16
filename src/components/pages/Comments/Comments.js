import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Comments extends Component {


    state = {
        comments: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    goNext = (event) => {
        this.props.dispatch({
            type: 'ENTER_COMMENTS',
            payload: this.state,
        });
        this.props.history.push('/submit')
    };

    goBack = (event) => {
        this.props.history.push('/support');
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