// api/auth.js
import axios from 'axios';
import { Base_url } from '../Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Url is Here
const Url = `${Base_url}/Register`;
export const Register = async (fullName, email, username, password) => {
    try {
        const response = await axios.post(`${Url}/signup`, {
            fullName,
            email,
            username,
            password,
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response) {
            return { success: false, error: error.response.data.message || 'Something went wrong. Please try again.' };
        } else if (error.request) {
            return { success: false, error: 'No response from server. Please check your internet connection and try again.' };
        } else {
            return { success: false, error: 'Failed to create account. Please try again.' };
        }
    }
};

// api/preferences.js
export const saveUserPreferences = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Preferences saved:', key, value);
    return { success: true };
  } catch (error) {
    console.error('Failed to save preferences:', error);
    return { success: false, error: 'Failed to save preferences' };
  }
};

export const getUserPreferences = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      console.log('Preferences retrieved:', key, parsedValue);
      return { success: true, data: parsedValue };
    } else {
      console.log('No preferences found for key:', key);
      return { success: true, data: null };
    }
  } catch (error) {
    console.error('Failed to get preferences:', error);
    return { success: false, error: 'Failed to get preferences' };
  }
};

