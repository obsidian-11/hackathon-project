import QueryString from 'qs'

export const apiPaths = {
  // Strapi Apis
  COMMON: 'common',

  // Next Apis
  NEXT_LOGIN: 'login',

}

export const apiQueries = {
  commonsQuery: QueryString.stringify({
    populate: '*',
  }),
}
