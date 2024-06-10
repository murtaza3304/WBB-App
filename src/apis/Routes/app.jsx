// api.js
import axios from 'axios';
import { Base_url } from '../Url';

export const HomeApiData = async () => {
  try {
    const response = await instance.get(`${Base_url}/endpoint`);
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
