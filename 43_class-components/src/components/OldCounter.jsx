import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    // console.log(this.props);
    console.log("Constructor run first");
  }
  render() {
    // console.log(this);
    console.log("render run second");
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <>
        <h1 className="mt-4">{name}</h1>

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
            onClick={() => this.setState({ count: count - 1 })}
          >
            -
          </button>
        </div>
        <div className="mt-6 flex items-center gap-5">
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count2: count2 + 1 })}
          >
            +
          </button>
          <h1>{count2}</h1>

          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count2: count2 - 1 })}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
