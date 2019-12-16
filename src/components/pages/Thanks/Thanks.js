import React, { Component } from 'react';

class Thanks extends Component {


    submitHandler = (event) => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <h2>THANK YOU FOR YOUR FEEDBACK!</h2>
                <p>To take the survey again please click the button below.</p>


                <button onClick={this.submitHandler}>RETAKE</button>
            </div>
        );
    }
}


export default Thanks;