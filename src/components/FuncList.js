function List({ seq, div, list }) {
    return (
        <ul key={seq}>
            <b>{div}</b>
            { list.map(data =>
                <li key={data}>{data}</li>
            ) }
        </ul>
    );
}

/**
 * 함수형 list 노출 방식을 배운다.
 *
 * @param pList
 * @returns {JSX.Element}
 * @constructor
 */
export default function FuncList({ pList }) {
    console.log('FuncList started.');
    console.log(pList);
    return (
        <div>
            { pList.map(data =>
                <List {...data} />
            ) }
        </div>
    );
}