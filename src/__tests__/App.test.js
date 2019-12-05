import React from "react";
import ReactDOM from "react-dom";
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import App from "../App";
import Main from "../pages/main";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let root;
domAct(() => {
  testAct(() => {
    root = create(<Main />);
  });
});

expect(root).toMatchSnapshot();
