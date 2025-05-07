import { useIntl } from "react-intl"
import { useClientStore } from "../../model/store"
import { clientHooksMessages } from "../messages"

export const useClient = () => {
    const client = useClientStore(state => state.client)
    const {formatMessage} = useIntl()

    if (!client) {
        throw new Error(formatMessage(clientHooksMessages.clientNotInitialized))
    }

    return client
}
