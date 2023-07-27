import {Component} from "react";

class Header extends Component {
    static defaultProps = {
        text: '헤더'
    }

    render() {
        console.log('Header render.');
        return (
            <header>
                <h1>{this.props.text}</h1>
                World!
            </header>
        )
    }
}

/* // babel에 의해 class 내에 선언된 static defaultProps가 아래와 같이 변환해준다.
Header.defaultProps = {
    text: '헤더'
}*/

export default Header;