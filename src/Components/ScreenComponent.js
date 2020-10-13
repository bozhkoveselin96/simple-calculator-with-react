import React, { Component } from "react";

export default class ScreenComponent extends Component {
    showScreen = () => {
        let state = this.props.state;
        if (state.firstNumber) {
            return (
                <h1>
                    { state.firstNumber }
                    { state.operation }
                    { state.secondNumber }
                </h1>
            );
        } else {
            return <h1>0</h1>
        }
    }
    render() {
        return this.showScreen();
    }
}