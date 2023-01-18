import { Component, ReactNode } from "react";
import Button from "./Button";

type HeaderProps = typeof Header.defaultProps & {
    title: string,
    showAddForm: boolean,
    showForm: () => void
}

type HeaderState = {}

class Header extends Component<HeaderProps, HeaderState> {

    static defaultProps = {
        title: 'ReactTS CC'
    }

    add() {
        console.log('Add Clicked');
    }

    render(): ReactNode {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                <Button
                    text={`${this.props.showAddForm ? 'Close' : 'Add'}`}
                    color={`${this.props.showAddForm ? 'red' : 'green'}`}
                    onClick={this.props.showForm}
                />
            </header>
        )
    }
}

export default Header;
