import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.increaseCount = this.increaseCount.bind(this)
  }

  decreaseCount() {
    console.log(this);
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>

        <div className="mt-6 flex items-center gap-5">
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: count + 1 })}
          >
            +
          </button>
          <h1>{count}</h1>

          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={this.decreaseCount.bind(this)}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
