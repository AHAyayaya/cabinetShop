import axios from 'axios'

export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://znkd.huiuqian.com/app/index.php?c=entry&op=post1&i=11&do=member&m=evzg_express',
    timeout: 5000
  })

  //发送网络请求
  return instance(config)
}