import {Component} from "react";

class Contents extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default Contents;