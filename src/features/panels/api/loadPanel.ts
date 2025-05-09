import { Panel } from "../lib/types"

const publicBaseUrl = import.meta.env.BASE_URL

export const loadPanel = async (path: string) => {
    const pathWithSlash = path.startsWith('/') ? path : `/${path}`
    const response = await fetch(`${publicBaseUrl}/panels${pathWithSlash}`)
    const jsonData = await response.json() as Panel

    return jsonData
}