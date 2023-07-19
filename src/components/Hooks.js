import {Component} from "react";

/**
 * Hooks을 배운다.
 */
class Hooks extends Component {
    /**
     * 생성자
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            mountedTime: 0,
            updatedTime: 0
        }
    }

    /**
     * mounted
     */
    componentDidMount() {
        this.setState({
            mountedTime: (new Date()).getTime()
        });
    }

    /**
     * updated
     */
    componentDidUpdate() {
        if(!this.state.updatedTime) {
            this.setState({
                updatedTime: (new Date()).getTime()
            });
        }
    }

    /**
     * render
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <ul>
                    <li>mounted time: {this.state.mountedTime}</li>
                    <li>updated time: {this.state.updatedTime}</li>
                </ul>
            </div>
        )
    }
}

export default Hooks;