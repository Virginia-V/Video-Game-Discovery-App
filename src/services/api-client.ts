import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '99e1bee8a60e4336a96534d97f213fae',
  },
});
