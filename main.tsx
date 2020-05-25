import("https://unpkg.com/es-react@16.8.60/index.js").then((ReactModules) => {
  const React = ReactModules.React;
  const ReactDOM = ReactModules.ReactDOM;

  const App = () => <h1>Hello World!</h1>;

  ReactDOM.render(<App />, document.getElementById("root"));
});
