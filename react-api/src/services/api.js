import axios from 'axios';
import { API_KEY } from '../constants/constants';

const instance = axios.create({
  baseURL: 'https://api.flickr.com/services',
  timeout: 5000,
  params: {
    nojsoncallback: 1,
    format: 'json',
    api_key: API_KEY,
    extras: 'date_upload,date_taken,owner_name,views,url_s,url_o',
  },
});

export default instance;
