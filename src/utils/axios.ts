/* eslint-disable no-param-reassign */
import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  const pantipAuthenBasic: string =
    process.env.NEXT_PUBLIC_PANTIP_AUTHEN_BASIC ?? '';
  config.headers.Ptauthorize = pantipAuthenBasic
    ? `Basic ${pantipAuthenBasic}`
    : '';
  return config;
});

export { httpClient };
