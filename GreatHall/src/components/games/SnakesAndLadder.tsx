import { Component } from 'react';

type CounterProps = {
  header: string;
};

type CounterState = {
  value: number;
};

class SnakesAndLadder extends Component<CounterProps, CounterState> {

  state: CounterState = {
    value: 0,
  };

  render() {
    // const { header } = this.props;
    // const { value } = this.state;

    return <div>
      <div className="board"></div>

    </div>;
  }
}
export default SnakesAndLadder;