import axios from 'axios';
import { API_KEY } from '../constants/constants';

const getImage = axios.create({
  baseURL: 'https://www.flickr.com/services',
  // timeout: 5000,
  params: {
    nojsoncallback: 1,
    format: 'json',
    api_key: API_KEY,
    // auth_token: '72157719716571657-daefb401a9878aa1',
    // api_sig: '9d1eaac3535514471b08dac819f1628b',
  },
});

export default getImage;
