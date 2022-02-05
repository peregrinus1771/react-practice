import api from '../../api/$api'
import aspida from '@aspida/fetch'

const fetchConfig = {
    headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY,
    },
    baseURL: 'https://your.microcms.io/api/v1',
}

export const client = api(aspida(fetch, fetchConfig))
