import React, { Component } from "react";
import DisplayComponent from "./DisplayComponent";
import ButtonComponent from "./ButtonComponent";

const errorMessage = 'Cannot be divided by zero!';

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            firstNumber     : '',
            secondNumber    : '',
            operation       : '',
            result          : '',
            selectedEqualTo : false
        };
    }

    getValueFromButton = value => {
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                switch (this.state.operation) {
                    case '':
                        if (this.state.firstNumber === errorMessage) {
                            this.clearState(value);
                        } else {
                            let previousFirstNum = this.state.firstNumber;
                            this.setState({ firstNumber : `${ previousFirstNum }${ value }`});
                        }
                        break;
                    default:
                        let previousSecondNum = this.state.secondNumber;
                        this.setState({ secondNumber : `${ previousSecondNum }${ value }` });
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (this.state.firstNumber === '') {
                    this.setState({ firstNumber : '0' });
                }
                if (this.state.firstNumber === errorMessage) {
                    this.clearState('0');
                }
                this.setState({ operation : value });

                break;
            case '=':
                this.setState({ selectedEqualTo : true });
                let result          = this.state.result;
                let firstNumber     = this.state.firstNumber;
                let secondNumber    = this.state.secondNumber;
                let operation       = this.state.operation;
                if (firstNumber !== '0' && operation === '/' && secondNumber === '0') {
                    result = errorMessage;
                } else {
                    result = eval(`${ firstNumber } ${ operation } ${ secondNumber }`);
                }
                this.clearState(result);
                break;
            case 'CLEAR':
                this.clearState('');
                break;
        }
    }

    clearState = result => {
        let firstNumber = '';
        if (result !== '') {
            firstNumber = result;
        }
        this.setState({
            firstNumber     : firstNumber,
            secondNumber    : '',
            operation       : '',
            result          : ''
        });
    }

    renderButtonsSection(buttonValues) {
        return (
            <div>
                <ButtonComponent value={ buttonValues[0] } getValue={ this.getValueFromButton } />
                <ButtonComponent value={ buttonValues[1] } getValue={ this.getValueFromButton } />
                <ButtonComponent value={ buttonValues[2] } getValue={ this.getValueFromButton } />
                <ButtonComponent value={ buttonValues[3] } getValue={ this.getValueFromButton } />
            </div>
        );
    }

    render() {
        return (
            <div>
                <DisplayComponent state={ this.state } />
                { this.renderButtonsSection(['0', '=', '+', 'CLEAR']) }
                { this.renderButtonsSection(['7', '8', '9', '-']) }
                { this.renderButtonsSection(['4', '5', '6', '*']) }
                { this.renderButtonsSection(['1', '2', '3', '/']) }
            </div>
        );
    }
}