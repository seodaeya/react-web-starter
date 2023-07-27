import axios from "axios";
import {useState} from "react";

/**
 * axios를 배운다.
 *
 * #proxy
 * - https://create-react-app.dev/docs/proxying-api-requests-in-development/
 */
export default function Axios() {
    const [result, setResult] = useState('');
    const get = () => {
        axios({
            url: '/api/get?p1=v1&p2=v2'
        }).then(function (res) {
            // handle success
            console.log(res);
            const {data} = res.data;
            setResult(data);
        })
        .catch(function (e) {
            // handle error
            console.log(e);
        })
        .finally(function () {
            // always executed
        });
    }
    return <>
        <button onClick={get}>Get</button>
        <span>{result}</span>
    </>
}