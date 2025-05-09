import {validate} from 'jsonschema'
import { loadSchema } from './loadSchema'
import { PanelsListItem } from '../lib/types'

const publicBaseUrl = import.meta.env.BASE_URL

export const loadPanelsList = async () => {
    const response = await fetch(`${publicBaseUrl}/panels-list.json`)
    const data = await response.json() as PanelsListItem[]

    const schema = await loadSchema('panels-list')

    if (!validate(data, schema).valid) {
        return [] as PanelsListItem[]
    }

    return data
}