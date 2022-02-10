import api from './$api'
import aspida from '@aspida/fetch'

const fetchConfig = {
    headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY,
    },
    baseURL: `https://${process.env.USER}.microcms.io/api/v1`,
}

export const client = api(aspida(fetch, fetchConfig))
