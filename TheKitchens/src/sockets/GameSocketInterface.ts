import { Socket } from "socket.io";

interface GameSocketInterface {

   handleConnection(socket: Socket): void;
   middlewareImplementation?(soccket: Socket, next: any): void

}

export default GameSocketInterface;