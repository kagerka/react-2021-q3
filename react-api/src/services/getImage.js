import axios from 'axios';
import { API_KEY } from '../constants/constants';

const getImage = axios.create({
  baseURL: 'https://www.flickr.com/services',
  timeout: 5000,
  params: {
    nojsoncallback: 1,
    format: 'json',
    api_key: API_KEY,
  },
});

export default getImage;
