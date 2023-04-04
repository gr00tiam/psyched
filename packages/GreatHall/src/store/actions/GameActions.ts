import * as actionTypes from "./ActionTypes"
import SocketHelper from '../../components/communication/SocketHelper';
import gameSocketHelper from '../../components/communication/GameSocketHelper';
import { GameEventPayload } from "../../../../CommonRooms/types/socket";

export function startJoiningGame() {
    const action: PsychedAction = {
        type: actionTypes.START_JOIN_GAME,
        payload: null
    }
    return dispatchAction(action)
}

export function finishJoiningGame() {
    const action: PsychedAction = {
        type: actionTypes.FINISH_JOIN_GAME,
        payload: null
    }
    return dispatchAction(action)
}

export async function joinGame(gameId: string) {
    const socket = SocketHelper.getInstance().socket;
    if (!gameId || gameId.trim() === '' || !socket) {
        alert("Error getting socket")
        return;
    } // TODO throw error

    const payload: GameEventPayload = { gameId };
    const joined = await gameSocketHelper.joinGameRoom(socket, payload)
        .catch((err) => { console.log(err); alert(err.error) });
    if (!joined) {
        // TODO handle error
        console.log("Error joining game")
    }
    const action: PsychedAction = {
        type: actionTypes.JOIN_GAME,
        payload: gameId
    }
    dispatchAction(action);
    const actionFinish: PsychedAction = {
        type: actionTypes.FINISH_JOIN_GAME,
        payload: null
    }
    return dispatchAction(actionFinish)
}

export function errorJoinGame() {
    const action: PsychedAction = {
        type: actionTypes.ERROR_JOIN_GAME,
        payload: null
    }
    return dispatchAction(action)
}

export function updateGameId(gameId: string) {
    const action: PsychedAction = {
        type: actionTypes.UPDATE_GAME_ID,
        payload: gameId
    }
    return dispatchAction(action)
}

function dispatchAction(action: PsychedAction) {
    return (dispatch: DispatchType) => { return dispatch(action) }
}