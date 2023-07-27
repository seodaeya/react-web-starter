import React, {Component} from "react";
// class 방식
import Header from "./components/Header";
import State from "./components/State";
import List from "./components/List";
import Hooks from "./components/Hooks";
// function 방식
import Counter from "./components/Counter";
import FuncList from "./components/FuncList";
import Axios from "./components/Axios";
import Style from "./components/Style";

class App extends Component {
    /**
     * 생성자: 초기화를 담당한다.
     *
     * @param props
     */
    constructor(props) {
        console.log('App constructor.');
        super(props);

        /**
         * 생성자(constructor)에서는 state에 직접 접근해서 처리 가능하다.
         * state가 수정되면, 화면을 다시 그린다(= render recalling).
         * 당연한 소리지만, render에 그려지는 컴포넌트들이 다시 그려지면, 하위 컴포넌트들도 전체가 갱신된다.
         * render만 재호출되고, hooks의 경우엔 재호출되지 않는다.
         *
         * @type {{divList: [{div: string, list: string[], seq: number},{div: string, list: string[], seq: number},{div: string, list: string[], seq: number}], list: [{text: string, seq: number},{text: string, seq: number},{text: string, seq: number}], key: string}}
         */
        this.state = {
            key: 'Hello!',
            list: [
                { seq: 1, text: 'list1' },
                { seq: 2, text: 'list2' },
                { seq: 3, text: 'list3' }
            ],
            divList: [
                { seq: 1, div: 'list1', list: ['data11', 'data12', 'data13']},
                { seq: 2, div: 'list2', list: ['data21', 'data22', 'data23']},
                { seq: 3, div: 'list3', list: ['data31', 'data32', 'data33']}
            ],
        }
    }

    /**
     * render
     *
     * @returns {JSX.Element}
     */
    render() {
        console.log('App render.');
        return (
            <div>
                {/* 1. class 방식 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */}

                {/* 1.1. 컴포넌트 값 전달과 state 변경을 감지하여 화면에 노출시켜준다. */}
                <h1>1. class 방식</h1>
                <h2>1.1. Header</h2>
                <Header // text={this.state.key} tag 내에서는 이렇게 주석을 쓸 수 있다.
                />

                {/* 1.2. click 이벤트를 이용하여 state를 수정하며, state, click을 배운다. */}
                <h2>1.2. State</h2>
                <State click={() => {
                    this.setState({
                        key: 'State 컴포넌트 클릭!'
                    })
                }} />

                {/* 1.3. list를 for 돌리며, 그리는 방법을 배운다. */}
                <h2>1.3. List</h2>
                <List list={this.state.list} click={(seq) => {
                    this.setState({
                        key: this.state.list.filter(data => data.seq === seq)[0].text
                    })
                }} />

                {/* 1.4. hooks - lifecycle 같은 느낌의 훅을 배운다. */}
                <h2>1.4. Hooks</h2>
                <Hooks />

                <br/>

                {/* 2. function 방식 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */}
                <h1>2. function 방식</h1>
                {/* 2.1. 함수형 state 사용방법을 배운다. */}
                <h2>2.1. Counter</h2>
                <Counter />
                {/* 2.2. 함수형 값 전달방식과 list */}
                <h2>2.2. FuncList</h2>
                <FuncList pList={this.state.divList}/>
                {/* 2.3. Axios를 배운다. */}
                <h2>2.3. Axios</h2>
                <Axios />
                {/* 2.4. Style을 배운다. */}
                <h2>2.4. Style</h2>
                <Style />
            </div>
        );
    }
}

export default App;