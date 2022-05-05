import { React } from "./yeact/src/createElement";

const root = document.getElementById("root");
const element = React.createElement("div", null, "hello world");
const element1 = <div>Hello Worldddddddddddd</div>;

React.render(element, root);
React.render(element1, root);
