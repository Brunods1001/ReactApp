const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

const createPet = (props) => {
  return React.createElement(Pet, props);
};

const petProps = [Mimi, Mojo, Luna, Quickplay];

const elements = petProps.map(createPet);

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    elements,
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
