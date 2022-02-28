// import React from "react";

/*
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.breed),
  ]);
};
*/

/*
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.species}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
*/

type Props = {
  name: string,
  species: string,
  breed: string,
};

const Pet = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.species}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export const createPet = (props: Props) => {
  // return React.createElement(Pet, props);
  // return <Pet name={props.name} breed={props.breed}></Pet>;
  return <Pet {...props}></Pet>;
};

export default Pet;
