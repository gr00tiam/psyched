import { Socket } from "socket.io-client";
import { GameEventPayload } from "../../../../CommonRooms/types/socket"
import { finishJoiningGame } from '../../store/actions/GameActions';
import { GAME_EVENT_JOIN_GAME, GAME_EVENT_ROOM_JOINED, GAME_EVENT_ROOM_JOIN_ERROR } from '@psyched/commonrooms/socket/SocketEvents'


class GameSocketHelper {
    public async joinGameRoom(socket: Socket, payload: GameEventPayload): Promise<boolean> {

        console.log("Joining game", payload.gameId)
        return new Promise((resolve, reject) => {
            socket.emit(GAME_EVENT_JOIN_GAME, payload);

            socket.on(GAME_EVENT_ROOM_JOINED, () => {
                console.log("Received msg room_joined")
                finishJoiningGame();
                resolve(true)
            })


            socket.on(GAME_EVENT_ROOM_JOIN_ERROR, (err: Error) => {
                console.log("Received msg room_join_error")
                reject(err)
            })
        });
    }
}

export default new GameSocketHelper();