import Axios from 'axios';

const axiosWithAuth = () => {

    return Axios.create({
        baseURL: 'https://simmr.herokuapp.com',
        headers: {
            authorization : localStorage.getItem('test-token')
        }
    })
}

export default axiosWithAuth;