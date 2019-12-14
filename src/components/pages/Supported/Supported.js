import React, { Component } from 'react';

class Supported extends Component {
    render() {
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <input
                    type="text"
                    placeholder="Support?"
                />
                <button>NEXT</button>
            </div>
        );
    }
}
export default Supported;