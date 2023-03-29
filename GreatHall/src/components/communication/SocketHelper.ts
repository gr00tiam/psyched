import { io, Socket } from "socket.io-client";
import { } from "socket.io-client";
// import { GameEventPayload, ChatEventPayload } from "../../../../CommonRooms/types/socket"


class SocketHelper {

    private static instance: SocketHelper;
    socket: Socket | null = null;

    private constructor() {
        console.log("Getting connected")
        this.socket = io("http://localhost:3001");
    }

    public static getInstance() {
        if (!SocketHelper.instance) {
            SocketHelper.instance = new SocketHelper();
        }
        return SocketHelper.instance;
    }

    // public send(event: string, payload: GameEventPayload | ChatEventPayload) {
    //     // console.log(this.socket);
    //     this.socket.emit(event, payload);
    // }

    public async connect(): Promise<Socket> {
        return new Promise((resolve, reject) => {
            // this.socket = io("http://localhost:3001");

            if (!this.socket) {
                return reject();
            }

            this.socket.on("connect", () => { resolve(this.socket as Socket) })

            this.socket.on("connect_error", (error) => { console.log(error); reject(error) })
        })

    }
}

export default SocketHelper;