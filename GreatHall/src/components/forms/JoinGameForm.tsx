import Container from 'react-bootstrap/Container';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SocketHelper from '../communication/SocketHelper';
import { GameEventPayload } from '../../../../CommonRooms/types/socket';
import gameSocketHelper from '../communication/GameSocketHelper';

type JoinGameFormProps = {
};

type JoinGameFormState = {
    gameId: string,
    isInRoom: boolean,
    isJoining: boolean
}

class JoinGameForm extends Component<JoinGameFormProps, JoinGameFormState> {

    state: JoinGameFormState = {
        gameId: '',
        isInRoom: false,
        isJoining: false
    };

    async handleSubmit(e: React.MouseEvent) {
        e.preventDefault();
        console.log("gameId", this.state.gameId);
        const payload: GameEventPayload = { gameId: this.state.gameId };
        const socket = SocketHelper.getInstance().socket;
        if (!this.state.gameId || this.state.gameId.trim() === '' || !socket) return;

        this.setState({ isJoining: true });
        const joined = await gameSocketHelper.joinGameRoom(socket, payload).
            catch((err) => alert(err));

        if (joined) {
            this.setState({ isJoining: false, isInRoom: true });
        }
    }
    render() {
        return (
            <Container className="p-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Game ID</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter a custom game id"
                            value={this.state.gameId}
                            onChange={(e) => {

                                this.setState({ gameId: e.target.value })
                            }} />
                        <Form.Text className="text-muted">
                            Share this game id with your friend to play the game {this.state.gameId}. Joined {this.state.isInRoom ? 'yes' : 'no'}
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(e: React.MouseEvent) => {
                        this.handleSubmit(e)
                    }}>
                        Join Game
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default JoinGameForm;

