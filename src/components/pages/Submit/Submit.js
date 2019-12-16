import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import mapStoreToProps from '../../redux/mapStoreToProps';

class Submit extends Component {


    ///BUTTON CLICK HANDLER

    submitHandler = (event) => {
        this.enterFeedback(this.props.store.inputReducer);
        this.props.history.push('/Thanks')
    }

    // AXIOS POST CALL TO THE DB WITH THE NEW FEEDBACK INFO

    enterFeedback(feedback) {

        axios({
            method: 'POST',
            url: '/get_feedback',
            data: feedback
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.warn(err);
            })

    }


    render() {
        console.log(this.props.store.inputReducer);
        return (
            <div>
                <h2>REVIEW YOUR FEEDBACK</h2>
                <p>Feeling: {this.props.store.inputReducer.feeling}</p>
                <p>Understanding: {this.props.store.inputReducer.understanding}</p>
                <p>Support: {this.props.store.inputReducer.support}</p>
                <p>Comments: {this.props.store.inputReducer.comments}</p>

                <button onClick={this.submitHandler}>SUBMIT</button>
            </div>
        );

    }

}


export default connect(mapStoreToProps)(Submit);