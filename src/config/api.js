import axios from 'axios';

const baseURL = 'https://afinadinho-back.herokuapp.com';

// eslint-disable-next-line no-undef
export const bbt = new BBT('Jwk23dE5HcJPSjPaWwbnlOwf');

export default axios.create({ baseURL });