import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-19-data.p.rapidapi.com',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': '20e1316d07msh2427b993d149a5dp1ea39bjsn4e55ff6092b8',
    useQueryString: true,
  },
});

export default api;
