interface PreGame {
  isInRoom: boolean,
  isJoining: boolean
}

interface Game {
  gameId: string,
  pre: PreGame
}

interface GameState {
  game: Game
}

interface GameAction {
  type: string,
  game: GameState
}

type AllState = {
  gameState: GameState
}

type PsychedAction = {
  type: string
  payload: any
}

type DispatchType = (args: PsychedAction) => PsychedAction