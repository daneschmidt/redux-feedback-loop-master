import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';
class Submit extends Component {
    render() {
        return (
            <div>
                <h2>REVIEW YOUR FEEDBACK</h2>
                <p>Feeling: {this.props.store.inputReducer.feeling}</p>
                <p>Understanding: {this.props.store.inputReducer.understanding}</p>
                <p>Support: {this.props.store.inputReducer.supported}</p>
                <p>Comments: {this.props.store.inputReducer.comments}</p>
                
                <button>SUBMIT</button>
            </div>
        );
    }
}
export default connect(mapStoreToProps)(Submit);