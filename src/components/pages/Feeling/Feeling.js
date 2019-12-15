import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {

    state = {
        feeling: '',
    }

    inputField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    goNext = (event) => {
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
export default Feeling;