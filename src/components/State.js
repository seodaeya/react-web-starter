import {Component} from "react";

class State extends Component {
    render() {
        console.log('State render.');
        return (
            <button onClick={this.props.click}>클릭!</button>
        )
    }
}

export default State;