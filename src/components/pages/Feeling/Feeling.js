import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Feeling extends Component {

    state = {
        feeling: '',
    }

    //GET INFO FROM INPUT FIELD

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }


    // if ({this.state.feeling} > 1 || < 6 ) {
    //     goNext;

    // }else if (console.warn('oh shit you need to enter some data'));
  


    //SEND INFO OFF TO REDUX AND SEND USER TO NEXT PAGE ON BUTTON CLICK

    goNext = (event) => {
        this.props.dispatch({
            type: 'ENTER_FEELING',
            payload: this.state,
        });
        this.props.history.push('/Understanding')
    };

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <h4>Enter a number between 1-5</h4>
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