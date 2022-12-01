import axios from 'axios'
export const baseUrl=`https://api.monestore.uz/api`

export const instance = axios.create({
  baseURL: baseUrl,
});

