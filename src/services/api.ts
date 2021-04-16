import axios from 'axios';

const api = axios.create({
  // para testar com o celular fisico usasse o ip da maquina
  baseURL: 'http://192.168.18.5:3333',
});
export default api;
