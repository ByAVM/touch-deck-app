import { useClientStore } from "../store"

export const useClient = () => {
    const ws = useClientStore(state => state.client)

    if (!ws) {
        throw new Error('Client not initialized')
    }

    return ws
}
