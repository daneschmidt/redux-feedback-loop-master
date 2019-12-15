import React, { Component } from 'react';

class Supported extends Component {


    state = {
        supported: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    goNext = (event) => {
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
                />
                <button onClick={this.goNext}>NEXT</button>
                <button onClick={this.goBack}>BACK</button>
            </div>
        );
    }
}
export default Supported;