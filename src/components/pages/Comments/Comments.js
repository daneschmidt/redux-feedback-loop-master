import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return(
            <div>
                   <h2>Any comments you want to leave?</h2>
                <input
                    type="text"
                    placeholder="Comments?"
                />
                <button>NEXT</button>
            </div>
        );
    }
}
export default Comments;