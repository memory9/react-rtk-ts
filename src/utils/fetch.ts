import axios, { AxiosRequestConfig } from 'axios'
import PubSub from 'pubsub-js'

const result = document.cookie.match(/codetoken=(CJWT [\w.-]+)/)

document.cookie = `codetoken=none; expires=${new Date(0)};`

if (result) {
  window.localStorage.setItem('token', result[1])
}

/* 该事件只会在不同页面上改变 storage 时被触发 */
window.addEventListener('storage', (event) => {
  if (event.key === 'token') {
    /* 发布用户 token 发生变化事件 */
    PubSub.publish('FETCH/LOCAL_STORAGE_TOKEN_CHANGE')
  }
})

/* 订阅成功退出应用事件，清空 localStorage 中保存的 token */
PubSub.subscribe('COMPONENTS/HEADER/LOGOUT_SUCCEED', () => {
  window.localStorage.removeItem('token')
})

const http = axios.create({
  baseURL: '/api/',
  timeout: 10000,
})

const getDynamicConfig = function () {
  /* 在之后的请求中，token 全部是从 localStorage 中取得 */
  const token = window.localStorage.getItem('token')

  return {
    headers: {
      authorization: token,
    },
  }
}

function axiosGet(path: string, config?: AxiosRequestConfig) {
  return http
    .get(path, { ...getDynamicConfig(), ...config })
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

function axiosPost(path: string, params?: any, config?: AxiosRequestConfig) {
  return http
    .post(path, params, { ...getDynamicConfig(), ...config })
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

function axiosPut(path: string, params?: any, config?: AxiosRequestConfig) {
  return http
    .put(path, params, { ...getDynamicConfig(), ...config })
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

function axiosDelete(path: string, params?: any) {
  return http
    .delete(path, { ...getDynamicConfig(), params })
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

/* 导出动态获取请求配置函数 */
export { getDynamicConfig }

/* 导出常用的四种 http 请求 */
export default {
  instance: http,
  get: axiosGet,
  post: axiosPost,
  put: axiosPut,
  delete: axiosDelete,
}
