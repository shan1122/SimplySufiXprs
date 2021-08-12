//if you want to use api sauce this function is for connection
import { create } from 'apisauce'
import {decode as atob, encode as btoa} from 'base-64';
// define the api
const apiClient = create({
  baseURL: 'http://sufirewards.simplysufi.com/sufirewardsapi/public/index.php/',
  headers: {
    'Authorization': 'Basic '+btoa('admin:admin'), 
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
   
  
  
  }, 
})
export default apiClient;