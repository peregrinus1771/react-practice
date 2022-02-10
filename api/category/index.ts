import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { CategoryTypes } from '../types'

export type Methods = {
    get: {
        query?: MicroCMSQueries
        resBody: MicroCMSListResponse<CategoryTypes>
    }
}
