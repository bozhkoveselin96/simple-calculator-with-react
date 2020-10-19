import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "../App.css";

export default class ButtonComponent extends Component {
    handleClick = () => {
        this.props.getValue(this.props.value);
    }

    render() {
        let multiplication = '×';
        let division = '÷';
        let newSign;
        if (this.props.value === '/') {
            newSign = division;
        } else if (this.props.value === '*') {
            newSign = multiplication;
        }

        return (
            <Button className={`btn-${ parseInt(this.props.value) > -1 ? this.props.value : 'sign' }`}
                    variant="contained"
                    onClick={ this.handleClick }
            >
                { (this.props.value === '/' || this.props.value === '*' ? newSign : this.props.value) }
            </Button>
        );
    }
}