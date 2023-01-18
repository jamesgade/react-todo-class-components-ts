import { Component, ReactNode } from "react";

type ButtonProps = typeof Button.defaultProps & {
    text: string,
    color: string,
    onClick: () => void
}

// type ButtonState = {}

class Button extends Component<ButtonProps>{

    static defaultProps = {
        text: 'click',
        color: 'blue'
    }

    render(): ReactNode {
        return <button onClick={this.props.onClick} className="btn" style={{ backgroundColor: this.props.color }}>{this.props.text}</button>
    }
}

export default Button;
