import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

  render() {
    // console.log(this.props);
    const { name } = this.props;
    return (
      <>
        <h1 id="counter-title" className="mt-4">
          {name}
        </h1>

        <div >
          <h1 className="cursor-pointer bg-sky-200 text-2xl text-center p-4"   onClick={this.props.increaseCount}>{this.props.count}</h1>
        </div>
      </>
    );
  }
}

export default withCounter(ClickCounter);
