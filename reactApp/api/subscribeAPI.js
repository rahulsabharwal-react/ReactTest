import axios from 'axios';

class SubscribeAPI {
    static submitSubscribeForm(payload) {
        let userData = {};
        userData["data"] = payload;
        return axios.post('http://localhost:4000/subscribeForm',
        payload);
    }
}
export default SubscribeAPI;