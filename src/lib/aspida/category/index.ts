import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { CategoryTypes } from '../../../types/types'

export type Methods = {
    get: {
        query?: MicroCMSQueries
        resBody: MicroCMSListResponse<CategoryTypes>
    }
}
