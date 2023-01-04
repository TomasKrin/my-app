import React from 'react';
import FuncButton from './FuncButton';

class ClassDiv extends React.Component {
    render() {
        return (
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.subtitle}</p>
            <FuncButton title={this.props.buttonText}/>
        </div>)
    }
}

export default ClassDiv;