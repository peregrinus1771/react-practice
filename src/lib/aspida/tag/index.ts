import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { TagTypes } from '../../../types/types'

export type Methods = {
    get: {
        query?: MicroCMSQueries
        resBody: MicroCMSListResponse<TagTypes>
    }
}
