import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { ContentTypes } from '../types'

export type Methods = {
    get: {
        query?: MicroCMSQueries
        resBody: MicroCMSListResponse<ContentTypes>
    }
}
