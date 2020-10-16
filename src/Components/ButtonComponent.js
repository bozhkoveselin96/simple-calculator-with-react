import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "../App.css";

export default class ButtonComponent extends Component {
    handleClick = () => {
        this.props.getValue(this.props.value);
    }

    render() {
        return (
            <Button className={`btn-${ parseInt(this.props.value) > -1 ? this.props.value : 'sign' }`}
                    variant="contained"
                    onClick={ this.handleClick }
            >
                { this.props.value }
            </Button>
        );
    }
}