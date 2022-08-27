import apiClient from 'utils/apiClient'
import { RecordInterface } from '../models/record'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const path = '/api/records'

export const RecordsService = {
    find: async (): Promise<RecordInterface[]> => {
        const { data } = await apiClient.get(path)
        return data
    },

    create: async (record: RecordInterface): Promise<RecordInterface> => {
        const { data } = await apiClient.post(path, record)
        return data
    },
}
