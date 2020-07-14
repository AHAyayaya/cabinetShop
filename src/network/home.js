import {axios} from './axios'

export function getHomeData(){
  return axios ({
    url: '/member'
  })
}