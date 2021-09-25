const axios = require('axios');

const instaciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params:{
        api_key: '4a82d93b0651487cb01eee1f1acfd145',
        
    }
})

module.exports = instaciaAxios;