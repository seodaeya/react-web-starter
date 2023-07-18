import React, {Component} from "react";
import Header from "./components/Header";
import Contents from "./components/Contents";

class App extends Component {
  render() {
    return (
        <div>
            <Header text='Hello!'></Header>
            <Contents value={`Let's react project`}></Contents>
        </div>
    );
  }
}

export default App;