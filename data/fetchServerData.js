import axios from 'axios';
import { BaseURL } from '../components/auth/config';


export let fetchApiData = (pageName) => {
    return axios({
        method: 'GET',
        url: BaseURL + pageName,
    })
    .then(response => {
        return response;
    })
    .catch(error => {
        error = Object.assign({}, error);
        return error        
    });
}