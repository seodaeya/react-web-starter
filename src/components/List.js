import {Component} from "react";

class List extends Component {
    render() {
        console.log('List render.');
        return (
            <ul>
                { this.props.list.map(data => (
                    // for 돌릴때, react가 식별할 수 있는 key라는 속성을 줘야 한다.
                    <li key={data.seq} onClick={() => {
                        this.props.click(data.seq);
                    }} style={{cursor: 'pointer'}}>{data.text}</li>
                )) }
            </ul>
        )
    }
}

export default List;