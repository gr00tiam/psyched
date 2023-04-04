import { Server, Socket } from 'socket.io';
import {
    // OnConnect,
    SocketController,
    SocketIO,
    ConnectedSocket,
    OnDisconnect,
    MessageBody,
    OnMessage,
} from 'socket-controllers';
import { Service } from 'typedi';
import { GameEventPayload } from '../../../../CommonRooms/types/socket'
import { GAME_EVENT_JOIN_GAME, GAME_EVENT_ROOM_JOINED, GAME_EVENT_INVALID_GAMEID_ERROR, GAME_EVENT_ROOM_JOIN_ERROR } from '@psyched/commonrooms/socket/SocketEvents'



@SocketController()
@Service()
export class GameSocketController {
    // @OnConnect()
    // connection(@ConnectedSocket() _socket: any) {
    //     console.log('client connected');
    // }

    @OnDisconnect()
    disconnect(@ConnectedSocket() _socket: any) {
        console.log('client disconnected');
    }

    @OnMessage(GAME_EVENT_JOIN_GAME)
    async joinGame(
        @SocketIO() server: Server,
        @ConnectedSocket() socket: Socket,
        @MessageBody() message: GameEventPayload) {
        console.log('New User joined game:', message);
        const gameId = message.gameId;

        if (!gameId) {
            socket.emit(GAME_EVENT_INVALID_GAMEID_ERROR, {
                error: "Null/Empty Game ID"
            })
            console.error("Invalid Game ID");
            return;
        }
        // Get all sockets in a room with id = gameId
        const connectedSockets = server.sockets.adapter.rooms.get(gameId);

        // Get all rooms the current socket is a part of, except its personal default room 
        const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id);

        if (socketRooms.length > 0 || connectedSockets && connectedSockets.size === 2) {
            console.error("Room full for Game ID");
            socket.emit(GAME_EVENT_ROOM_JOIN_ERROR, {
                error: "Room is full, choose another room to play"
            })
        } else {
            // Creates if needed and joins the room
            await socket.join(gameId)
            console.log("Room Joined")
            socket.emit(GAME_EVENT_ROOM_JOINED)
            // connectedSockets?.forEach((s) => {s.emit("room_joined")})
        }
    }
}