import React, {Component} from "react";
import Header from "./components/Header";
import State from "./components/State";
import List from "./components/List";
import Hooks from "./components/Hooks";

class App extends Component {
    /**
     * 생성자: 초기화를 담당한다.
     *
     * @param props
     */
    constructor(props) {
        super(props);

        // 생성자(constructor)에서는 state에 직접 접근해서 처리 가능하다.
        this.state = {
            key: 'Hello!',
            list: [
                { seq: 1, text: 'list1' },
                { seq: 2, text: 'list2' },
                { seq: 3, text: 'list3' }
            ],
            mountedTime: 0,
            updatedTime: 0
        }
    }

    render() {
        return (
            <div>
                {/* 1. 컴포넌트 값 전달과 state 변경을 감지하여 화면에 노출시켜준다. */}
                <Header text={this.state.key} />
                {/* 2. click 이벤트를 이용하여 state를 수정하며, state, click을 배운다. */}
                <State click={() => {
                    this.setState({
                        key: 'State 컴포넌트 클릭!'
                    })
                }} />
                {/* 3. list를 for 돌리며, 그리는 방법을 배운다. */}
                <List list={this.state.list} click={(seq) => {
                    this.setState({
                        key: this.state.list.filter(data => data.seq === seq)[0].text
                    })
                }} />
                {/* 4. hooks - lifecycle 같은 느낌의 훅을 배운다. */}
                <Hooks />
            </div>
        );
    }
}

export default App;