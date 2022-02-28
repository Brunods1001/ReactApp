// import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { createPet } from "./components/Pet";

const Mimi = {
  name: "Mimi",
  species: "Hamster",
  breed: "Syrian",
};

const Mojo = {
  name: "Mojo",
  species: "Dog",
  breed: "Bichon",
};

const Luna = {
  name: "Luna",
  species: "Dog",
  breed: "Havanese",
};

const Quickplay = {
  name: "Quickplay",
  species: "Cat",
  breed: "?",
};

const petProps = [Mimi, Mojo, Luna, Quickplay];

const elements = petProps.map(createPet);

/*
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    elements,
  ]);
};
*/

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      {elements}
    </div>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
