import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export const dateFormat = (date: string) => {
    return dayjs(date).format('ll')
}
