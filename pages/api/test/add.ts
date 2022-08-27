import connectMongo from '../../../utils/connectMongo'
import Record, { RecordInterface } from '../../../src/models/record'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addRecord(req, res): Promise<RecordInterface> {
    try {
        await connectMongo()
        const record = await new Record(req.body)
        return res.json({ record })
    } catch (error) {
        res.json({ error })
    }
}
