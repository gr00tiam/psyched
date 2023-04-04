import { io, Socket } from "socket.io-client";
import { } from "socket.io-client";
import { GAME_EVENT_CONNECT, GAME_EVENT_CONNECT_ERROR } from '@psyched/commonrooms/socket/SocketEvents'


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
            //connect
            this.socket.on(GAME_EVENT_CONNECT, () => { resolve(this.socket as Socket) })
            //connect error
            this.socket.on(GAME_EVENT_CONNECT_ERROR, (error: Error) => { console.log(error); reject(error) })
        })

    }
}

export default SocketHelper;