import axios from 'axios'

export function axios(config){
  //创建axios实例
  const instance = axios.create({
    baseURL: 'znkd.huiuqian.com',
    timeout: 5000
  })

  //发送网络请求
  return instance(config)
}