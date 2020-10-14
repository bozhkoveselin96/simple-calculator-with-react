import React, { Component } from "react";
import ScreenComponent from "./ScreenComponent";
import ButtonComponent from "./ButtonComponent";


const errorMessage = 'Cannot be divided by zero!';

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            firstNumber     : '',
            secondNumber    : '',
            operation       : '',
            result          : ''
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
                this.assignToScreenSelectedNumber(value);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.assignToScreenSelectedOperation(value);
                break;
            case '=':
                let result = this.calculate();
                this.clearState(result);
                break;
            default :
                this.clearState('');
                break;
        }
    }

    assignToScreenSelectedNumber = value => {
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
    }

    assignToScreenSelectedOperation = value => {
        switch (this.state.firstNumber) {
            case '':
                this.setState({ firstNumber : '0' });
                break;
            case errorMessage:
                this.clearState('0');
                break;
        }
        this.setState({ operation : value });
    }

    calculate = () => {
        let result;
        let firstNumber     = this.state.firstNumber;
        let secondNumber    = this.state.secondNumber;
        let operation       = this.state.operation;
        if (firstNumber !== '0' && operation === '/' && secondNumber === '0') {
            result = errorMessage;
        } else {
            result = eval(`${ firstNumber } ${ operation } ${ secondNumber }`);
        }
        return result;
    }

    clearState = result => {
        let firstNumber = '';
        if (result) {
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
                <ScreenComponent state={ this.state } />
                { this.renderButtonsSection(['0', '=', '+', 'CLEAR']) }
                { this.renderButtonsSection(['7', '8', '9', '-']) }
                { this.renderButtonsSection(['4', '5', '6', '*']) }
                { this.renderButtonsSection(['1', '2', '3', '/']) }
            </div>
        );
    }
}