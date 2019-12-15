import React, { Component } from 'react';

class Understanding extends Component {
    render() {
        return (
            <div>
                <h2>How well are you understanding the content??</h2>
                <input
                    type="number"
                    placeholder="Understanding?"
                />
                <button>NEXT</button></div>
        );
    }
}
export default Understanding;