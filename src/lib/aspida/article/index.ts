import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { ArticleTypes } from '../../../types/types'

export type Methods = {
    get: {
        query?: MicroCMSQueries
        resBody: MicroCMSListResponse<ArticleTypes>
    }
}
