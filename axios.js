import axios from 'axios'
export const baseUrl=`http://137.184.3.22:3000/api`

export const instance = axios.create({
  baseURL: baseUrl,
  
});

