import {validate} from 'jsonschema'
import { loadSchema } from './loadSchema'
import { PanelsListItem } from '../lib/types'

export const loadPanelsList = async () => {
    const response = await fetch('/panels-list.json')
    const data = await response.json() as PanelsListItem[]

    const schema = await loadSchema('panels-list')

    if (!validate(data, schema).valid) {
        return [] as PanelsListItem[]
    }

    return data
}