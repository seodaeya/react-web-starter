import {Component} from "react";

class List extends Component {
    render() {
        return (
            <ul>
                { this.props.list.map(data => (
                    <li key={data.seq} onClick={() => {
                        this.props.click(data.seq);
                    }} style={{cursor: 'pointer'}}>{data.text}</li>
                )) }
            </ul>
        )
    }
}

export default List;