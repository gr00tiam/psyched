import { Socket } from "socket.io";
import { ConnectedSocket, OnConnect, SocketController } from "socket-controllers"
import { Service } from 'typedi';

@SocketController()
@Service()
export class MainController {

    // @OnConnect()
    // public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() _io: Server) {
    //     console.log("New socket connected", socket.id);
    // }

    @OnConnect()
    connection(@ConnectedSocket() socket: Socket) {
        console.log('client connected ' + socket.id);
    }
}