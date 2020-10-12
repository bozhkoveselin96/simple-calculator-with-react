import React, { Component } from "react";

export default class DisplayComponent extends Component {
    showDisplay() {
        if (this.props.result === 0) {
            return (
                <h1>
                    { this.props.firstNumber }
                    { this.props.operation }
                    { this.props.secondNumber }
                </h1>
            );
        } else {
            return <h1>{ this.props.result }</h1>
        }
    }
    render() {
        return this.showDisplay();
    }
}