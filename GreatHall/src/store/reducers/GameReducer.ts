import * as actionTypes from "../actions/ActionTypes"

const initialState: GameState = {
  game: {
    gameId: '',
    pre: {
      isInRoom: false,
      isJoining: false
    }
  }
}

const GameReducer = (
  state: GameState = initialState,
  action: PsychedAction
): GameState => {

  switch (action.type) {
    case actionTypes.START_JOIN_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          pre: {
            ...state.game.pre,
            isJoining: true
          },
        }
      }
    case actionTypes.FINISH_JOIN_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          pre: {
            ...state.game.pre,
            isJoining: false,
            isInRoom: true,
          },
        },
      }
    case actionTypes.JOIN_GAME:
      var gameId = action.payload as string;
      return {
        ...state,
        game: {
          ...state.game,
          gameId,
        },
      }
    case actionTypes.ERROR_JOIN_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          pre: {
            ...state.game.pre,
            isInRoom: false
          },
        },
      }
    case actionTypes.UPDATE_GAME_ID:
      gameId = action.payload as string;
      return {
        ...state,
        game: {
          ...state.game,
          gameId
        },
      }
  }
  return state
}

export default GameReducer