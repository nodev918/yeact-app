export const React = {
  createElement,
  render,
};

export const test = "hello";

function createElement(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key != "children";
  Object.keys(element.props)
    .filter(isProperty)
    .map((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
  return dom;
}

// const root = document.getElementById("root");
// const element = Yeact.createElement("div", null, "hello world");
// const element1 = <div>Hello World</div>;

// Yeact.render(element, root);
// Yeact.render(element1, root);
