import axios from 'axios';

const baseURL = 'https://afinadinho-back.herokuapp.com';

// eslint-disable-next-line no-undef
export const bbt = new BBT('Jwk23dE5HcJPSjPaWwbnlOwf');

bbt.subscribe({
    channel: 'Afinadinho',
    resource: 'frequencia',
    read: true,
    callback: function(msg, err){
      console.log('Inscrito', msg, err)
    }
    });

export default axios.create({ baseURL });