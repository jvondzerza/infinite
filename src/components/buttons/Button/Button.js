'use strict';

import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            window.open('https://en.wikipedia.org/wiki/Rickrolling', '_blank');
        }

        return (
            <button onClick={() => this.setState({ clicked: true }) }>
                Like
            </button>
        );
    }
}

export default Button