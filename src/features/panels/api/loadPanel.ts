import { Panel } from "../lib/types"

export const loadPanel = async (path: string) => {
    const pathWithSlash = path.startsWith('/') ? path : `/${path}`
    const response = await fetch(`/panels${pathWithSlash}`)
    const jsonData = await response.json() as Panel

    return jsonData
}