import { Component, ReactNode } from "react";
import {Link} from 'react-router-dom';

interface FooterPropsType {
    goto: string,
    label: string
}

class Footer extends Component<FooterPropsType> {
    render(): ReactNode {
        return (
            <footer>
                <p>React Class Components & JavaScript</p>
                <Link to={`${this.props.goto}`}>{this.props.label}</Link>
            </footer>
        )
    }
}

export default Footer;
