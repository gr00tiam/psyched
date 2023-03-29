import { Socket } from "socket.io-client";
import { GameEventPayload } from "../../../../CommonRooms/types/socket"


class GameSocketHelper {
    public async joinGameRoom(socket: Socket, payload: GameEventPayload): Promise<boolean> {

        console.log("Joining game", payload.gameId)
        return new Promise((resolve, reject) => {
            socket.emit("join_game", payload);

            socket.on("room_joined", () => resolve(true))

            socket.on("room_joined_error", (err) => reject(err))
        });
    }
}

export default new GameSocketHelper();