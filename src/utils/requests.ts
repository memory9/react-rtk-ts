import http from './fetch'

export const getUserInformation = () => http.get('/v1/accounts')
