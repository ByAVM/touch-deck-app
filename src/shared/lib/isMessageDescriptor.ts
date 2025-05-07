import { MessageDescriptor } from "react-intl"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isMessageDescriptor = (value: any): value is MessageDescriptor => {
    return !!value && typeof value === 'object' && typeof value.id === 'string' && typeof value.defaultMessage === 'string'
}