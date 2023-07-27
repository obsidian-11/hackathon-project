import baseAxios from 'axios'
import appConfig from './appConfig'

const axios = baseAxios.create({
  baseURL: appConfig.API_BASE,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
  },
})

export const getAxiosInstance = (jwt) =>
  baseAxios.create({
    baseURL: appConfig.NEXT_PUBLIC_API_BASE,
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      Authorization: jwt ? `Bearer ${jwt}` : undefined,
    },
  })

export default axios
