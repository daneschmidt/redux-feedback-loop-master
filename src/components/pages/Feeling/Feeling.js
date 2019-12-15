import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Feeling extends Component {

    state = {
        feeling: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    goNext = (event) => {
        this.props.dispatch({
            type: 'ENTER_FEELING',
            payload: this.state,
        });
        console.log(this.state);
        this.props.history.push('/Understanding')
    };

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input
                    type="number"
                    placeholder="Feeling?"
                    onChange={(event) => this.inputField(event, 'feeling')}
                />
                <button onClick={this.goNext}>NEXT</button>

            </div>
        );
    }
}
export default connect(mapStoreToProps)(Feeling);