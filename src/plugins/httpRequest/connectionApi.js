import { httpRequest } from './httpRequestInstance'
export const getConnections = async (config) => {
    try {
        const res = await httpRequest.get('/iomr2egc/connection', config)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}
