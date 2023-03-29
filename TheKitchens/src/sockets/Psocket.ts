import { SocketControllers } from 'socket-controllers';
import { Server } from 'socket.io';
import { Container } from 'typedi';
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

       new SocketControllers({
        io: Psocket.io,
        container: Container,
        // controllers: [GameSocketController],
        controllers: [__dirname + '/controllers/**/*.ts'],
    });

       return Psocket.io;

   }
}

export default Psocket;