import { Server, Socket } from 'socket.io';
import http from "http";

const WEBSOCKET_CORS = {
    origin: "*",
    methods: ["GET", "POST"]
 }

class Psocket extends Server {
    
    private static io: Psocket;

   private constructor(httpServer: http.Server) {
       super(httpServer, {
        cors: WEBSOCKET_CORS
       });
   }

   public static getInstance(httpServer?: http.Server): Psocket {

       if (!Psocket.io) {
        if (!httpServer) {
            throw new Error('Psocket not initialized. Pass an httpServer to instantiate');
        }
        Psocket.io = new Psocket(httpServer);
       }

       return Psocket.io;

   }

   public initializeHandlers(socketHandlers: Array<any>) {
    socketHandlers.forEach(element => {
        Psocket.io.of(element.path, (socket: Socket) => {
            element.handler.handleConnection(socket);
        });
    });
}
}

export default Psocket;