// init web sockets
const WebSocket = require('ws');

// init web sockets server
const wss = new WebSocket.Server({ port: 8080 });

// web socket server on connection
wss.on("connection", ws => {
    // on client connected
    console.log('Client Connected');
    
    // on client sending data
    ws.on(
        "message", data => {
            console.log(`Client sent: ${data} `);
            ws.send(data.toString().toUpperCase());
            console.log(`Message send: ${data.toString().toUpperCase()}`);
        }
    )


    // on client disconnected
    ws.on('close', () => {console.log('Client Disconnected');});

})