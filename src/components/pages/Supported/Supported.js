import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Supported extends Component {

    state = {
        support: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    goNext = (event) => {
        this.props.dispatch({
            type: 'ENTER_SUPPORT',
            payload: this.state,
        });
        this.props.history.push('/comments')
        };
    
    goBack = (event) => {     
        this.props.history.push('/Understanding');
        }




    render() {
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <input
                    type="number"
                    placeholder="Support?"
                    onChange={(event) => this.inputField(event, 'support')}
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>
            </div>
        );
    }
}
export default connect(mapStoreToProps)(Supported);