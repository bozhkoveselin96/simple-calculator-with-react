import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import "../App.css";
import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({ secondary: { dark: '#8b0000'} });

export default class ScreenComponent extends Component {
    showScreen = () => {
        let state = this.props.state;
        if (state.firstNumber) {
            return (
                <TextField
                    className="result-field"
                    id="outlined-basic"
                    label="Result"
                    variant="outlined"
                    value={
                        state.firstNumber +
                        state.operation   +
                        state.secondNumber
                    }
                    />
            );
        } else {
            return <TextField
                className="result-field"
                id="outlined-basic"
                label="Result"
                variant="outlined"
                value="0"
            />
        }
    }
    render() {
        return this.showScreen();
    }
}