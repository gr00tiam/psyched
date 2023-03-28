import { Socket } from "socket.io";
import MySocketInterface from "./GameSocketInterface";

class GameSocketImpl implements MySocketInterface {

    handleConnection(socket: Socket) {
        socket.emit('ping', 'Hi! I am a live socket connection');

        socket.on("foo", () => {
            console.log("received game foo");
        });
    }
}

export default GameSocketImpl;