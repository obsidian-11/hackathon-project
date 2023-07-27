import axios from 'config/axios'
import { apiPaths, apiQueries } from '../config/apiPaths'

export const fetchPageData = async (...apis) => {
  const promises = []
  const apisWithCommon = [
    `${apiPaths.COMMON}?${apiQueries.commonsQuery}`,
    ...apis,
  ]
  apisWithCommon.forEach((api) => {
    promises.push(axios.get(api))
  })
  try {
    const responses = await Promise.all(promises)
    return responses
  } catch (e) {
    return { error: e }
  }
}
