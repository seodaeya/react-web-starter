import {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.text}</h1>
                World!
            </header>
        )
    }
}

export default Header;