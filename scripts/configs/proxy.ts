import { ProxyTable } from '../typings/server'

const proxyTable: ProxyTable = {
  // '/path_to_be_proxy': { target: 'http://target.domain.com', changeOrigin: true },
  '/api/v1': {
    target: 'https://www.codingstep.cn',
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^.api/v1': '/api/v1',
    },
  },
}

export default proxyTable
