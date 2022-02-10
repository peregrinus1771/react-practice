import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { TagTypes } from '../types'

export type Methods = {
    get: {
        query?: MicroCMSQueries
        resBody: MicroCMSListResponse<TagTypes>
    }
}
