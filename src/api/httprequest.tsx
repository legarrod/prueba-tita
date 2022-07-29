import axios from 'axios';

export const get = async (url: string, callback: any) => {
  const apiId = process.env.REACT_APP_API_API_ID;
  try {
    const data = await axios.get(url, {
      headers: { 'app-id': apiId },
    });
    callback(data);
  } catch (error: any) {
    callback(error.response?.data);
  }
};
