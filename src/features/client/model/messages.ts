import { defineMessages } from "react-intl";

export const clientModelMessages = defineMessages({
    connectionStart: {
        id: 'features.client.model.connectionStart',
        defaultMessage: 'Start connect'
    },
    connectionDone: {
        id: 'features.client.model.connectionDone',
        defaultMessage: 'Connection completed'
    },
    connectionClosed: {
        id: 'features.client.model.connectionClosed',
        defaultMessage: 'Connection closed. Reconnect after {delay}s'
    },

    error: {
        id: 'features.client.model.error',
        defaultMessage: 'Client error!'
    }
})