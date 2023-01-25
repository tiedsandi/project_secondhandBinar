import axios from 'axios';

export default axios.create({
    baseURL: 'https://dev-second-hand.herokuapp.com/api/v1/',
});