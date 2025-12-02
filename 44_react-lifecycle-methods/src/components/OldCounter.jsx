import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor run ");
    this.timerId = null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // console.log(document.querySelector("#counter-title"));
    // this.timerId = setInterval(() => {
    //   console.log("hii");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // clearInterval(this.timerId)
  }

  render() {
    // console.log(this);
    // console.log(document.querySelector("#counter-title"));  return null

    console.log("render run ");
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
            onClick={() => this.setState({ count: count - 1 })}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
