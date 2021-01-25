import axios from 'axios';

const apiRestCountries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
})

export default apiRestCountries;