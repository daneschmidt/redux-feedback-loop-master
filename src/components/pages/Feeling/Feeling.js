import React, { Component } from 'react';

class Feeling extends Component {
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input
                    type="text"
                    placeholder="Feeling?"
                />
                <button>NEXT</button>
            </div>
        );
    }
}
export default Feeling;