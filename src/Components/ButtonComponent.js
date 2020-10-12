import React, { Component } from "react";

export default class ButtonComponent extends Component {
    handleClick = () => {
        this.props.getValue(this.props.value);
    }

    render() {
        return (
            <button onClick={ this.handleClick }>
                { this.props.value }
            </button>
        );
    }
}