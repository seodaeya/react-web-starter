import {useState} from "react";

/**
 * 함수형 state 사용방법을 배운다.
 * useState와 지역변수의 카운트 방법의 차이를 알아본다.
 * Q) setCount(count+1)를 click event에서 3번 호출한다면? count+1x3? ▶ snapshot(https://react.dev/learn/state-as-a-snapshot)
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Counter() {
    const [count, setCount] = useState(0);
    let cnt = 0;
    /**
     * 지역변수 카운트가 안된다고? 안되는 거 보여줄라고 해봤다.
     */
    /*function fnCount() {
        cnt++;
    }*/

    return (
        <ul>
            <li>
                <button onClick={/*fnCount*/() => {
                    cnt++;
                }}>[click!] let cnt: {cnt}</button>
            </li>
            <li>
                <button onClick={() => {
                    setCount(count + 1);
                }}>[click!] useState.setCount+1: {count}</button>
            </li>
            <li>
                <button onClick={() => {
                    setCount(count + 1); // 0 + 1 = 1
                    setCount(count + 1); // 1 + 1 = 2?
                    setCount(count + 1); // 2 + 1 = 3?
                }}>[click!] useState.setCount+3: {count}</button>
            </li>
            <li>
                <button onClick={() => {
                    setCount(count => count + 1); // 0 + 1 = 1
                    setCount(count => count + 1); // 1 + 1 = 2?
                    setCount(count => count + 1); // 2 + 1 = 3?
                }}>[click!] useState.setCount(+3): {count}</button>
            </li>
        </ul>
    )
}