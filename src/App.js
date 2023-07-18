import React, {Component} from "react";
import Header from "./components/Header";
import State from "./components/State";
import List from "./components/List";
import Contents from "./components/Contents";

class App extends Component {
    /**
     * 생성자: 초기화를 담당한다.
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            key: 'value',
            list: [
                { seq: 1, text: 'list1' },
                { seq: 2, text: 'list2' },
                { seq: 3, text: 'list3' }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header text='Hello!'></Header>
                <State click={() => {
                    this.setState({
                        key: 'State 컴포넌트 클릭!'
                    })
                }}></State>
                <List list={this.state.list} click={(seq) => {
                    this.setState({
                        key: this.state.list.filter(data => data.seq === seq)[0].text
                    })
                }}></List>
                <Contents value={this.state.key}></Contents>
            </div>
        );
    }
}

export default App;