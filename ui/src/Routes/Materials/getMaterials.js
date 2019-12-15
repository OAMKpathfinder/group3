import axios from 'axios';

export default function createRowData(count) {
   

    alert("2222");
   

    return axios('http://localhost:1337/materials');
}
