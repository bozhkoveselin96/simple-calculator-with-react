import React, { Component } from "react";
import "../App.css";
import Chip from '@material-ui/core/Chip';

export default class ScreenComponent extends Component {
    showScreen = () => {
        let state = this.props.state;
        if (state.firstNumber) {
            let multiplication = '×';
            let division = '÷';
            let newSign;
            if (state.operation === '/') {
                newSign = division;
            } else if (state.operation === '*') {
                newSign = multiplication;
            }

            return (
                <Chip
                    className="result-field"
                    label={
                        state.firstNumber +
                        (state.operation === '/' || state.operation === '*' ? newSign : state.operation)   +
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