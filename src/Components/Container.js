import React, { Component } from "react";
import DisplayComponent from "./DisplayComponent";
import ButtonComponent from "./ButtonComponent";

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            result       : 0,
            firstNumber  : '',
            secondNumber : '',
            operation    : '',
            getResult    : false
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
                        this.setState({ firstNumber : value });
                        break;
                    default:
                        this.setState({ secondNumber : value });
                }
                console.log(this.state)
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
                this.setState({ operation : value });
                console.log(this.state)
                break;
            case '=':
                let result = this.state.result;
                result = eval(`${ this.state.firstNumber } ${ this.state.operation } ${ this.state.secondNumber }`);
                this.setState({ result : result });
                console.log(this.state)
                break;
        }
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
                <DisplayComponent
                    result={ this.state.result }
                    firstNumber={ this.state.firstNumber }
                    operation={ this.state.operation }
                    secondNumber={ this.state.secondNumber }
                />
                { this.renderButtonsSection(['0', '=', '+', 'CLEAR']) }
                { this.renderButtonsSection(['7', '8', '9', '-']) }
                { this.renderButtonsSection(['4', '5', '6', 'x']) }
                { this.renderButtonsSection(['1', '2', '3', '/']) }
            </div>
        );
    }
}