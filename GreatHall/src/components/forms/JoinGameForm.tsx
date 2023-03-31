import * as React from "react"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { startJoiningGame, joinGame, updateGameId } from '../../store/actions/GameActions';

type Props = {
    gameState: GameState
}

const JoinGameForm: React.FC<Props> = ({ gameState }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const _updateGameId = React.useCallback(
        (gameId: string) => dispatch(updateGameId(gameId)),
        [dispatch]
    )

    const _startJoiningGame = React.useCallback(
        () => dispatch(startJoiningGame()),
        [dispatch]
    )

    const _joinGame = React.useCallback(async (gameId: string) => {
        return dispatch(await joinGame(gameId))
    },
        [dispatch]
    )

    return (
        <Container className="p-3">
            <Form onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target)
                console.log("gameId", gameState.game.gameId);

                _startJoiningGame();
                _joinGame(gameState.game.gameId);
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Game ID</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter a custom game id"
                        value={gameState.game.gameId || ''}
                        onChange={(e) => {
                            _updateGameId(e.target.value)
                        }} />
                    <Form.Text className="text-muted">
                        Share this game id with your friend to play the game {gameState.game.gameId}. Joined {gameState.game.pre.isInRoom ? 'yes' : 'no'}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Join Game
                </Button>
            </Form>
        </Container>
    );
}

export default JoinGameForm;

