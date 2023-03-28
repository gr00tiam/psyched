import { Socket } from "socket.io-client";
import { io } from "socket.io-client";


export class SocketUtils {

    private static instance: SocketUtils;
    private socket: Socket;

    private constructor() {
        this.socket = io("http://localhost:3001");
    }

    public static getInstance() {
        if (!SocketUtils.instance) {
            SocketUtils.instance = new SocketUtils();
        }
        return SocketUtils.instance;
    }

    public send() {
        this.socket.emit("request_orders");
    }
}