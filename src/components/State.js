import {Component} from "react";

class State extends Component {
    render() {
        return (
            <button onClick={this.props.click}>클릭!</button>
        )
    }
}

export default State;