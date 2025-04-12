export const ws = new WebSocket('wss://192.168.1.54/ws')

ws.onmessage = (event) => {
    console.log(event.data)
}