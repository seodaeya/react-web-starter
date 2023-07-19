import {useState} from "react";

/**
 * 함수형 state 사용방법을 배운다.
 * useState와 지역변수의 카운트 방법의 차이를 알아본다.
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
        <>
            <button onClick={() => {
                setCount(count + 1);
            }}>[click!] useState.setCount: {count}</button>
            /
            <button onClick={/*fnCount*/() => {
                cnt++;
            }}>[click!] let cnt: {cnt}</button>
        </>
    )
}