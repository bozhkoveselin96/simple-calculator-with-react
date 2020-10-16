import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import "../App.css";
import Chip from '@material-ui/core/Chip';

export default class ScreenComponent extends Component {
    showScreen = () => {
        let state = this.props.state;
        if (state.firstNumber) {
            return (
                <Chip
                    className="result-field"
                    label={
                        state.firstNumber +
                        state.operation   +
                        state.secondNumber
                    }
                />
                );
        } else {
            return <Chip className="result-field" label="0" />;
        }
    }
    render() {
        return this.showScreen();
    }
}