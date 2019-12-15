import React, { Component } from 'react';

class Comments extends Component {


    state = {
        comments: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    goNext = (event) => {
        this.props.history.push('/submit')
        };
    
    goBack = (event) => {     
        this.props.history.push('/supported');
        }




    render() {
        return(
            <div>
                   <h2>Any comments you want to leave?</h2>
                <input
                    type="text"
                    placeholder="Comments?"
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>s
            </div>
        );
    }
}
export default Comments;