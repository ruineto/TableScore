var ip = require('ip')

export const server = {

    baseURL: 'http://'+ip.address()+':3000'
}