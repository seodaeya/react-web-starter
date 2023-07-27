/**
 * Style 적용 방법에 대해서 배운다.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Style() {
    console.log('Style started.');
    const style = { // 세미콜론으로 나누지 않고, Object로 구성하며, key는 카멜케이스로 작성한다.
        fontStyle: 'italic',
        marginTop: '30px',
        color: 'red'
    }
    return <>
        <span style={style}>글씨</span>
    </>
}