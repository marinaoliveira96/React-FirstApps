const useState = React.useState;

const pets = [
{ name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
{ name: "Barksalot", species: "dog", age: "3", id: 987654321 },
{ name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
{ name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
{ name: "Paws", species: "dog", age: "6", id: 789789789 }];

function OurApp() {
  return (
    React.createElement(React.Fragment, null,
    React.createElement(OurHeader, null),
    React.createElement(TimeArea, null),
    React.createElement("ul", null,
    pets.map(pet => React.createElement(Pet, { name: pet.name, species: pet.species, age: pet.age, key: pet.id }))),

    React.createElement(Footer, null)));


}

function Pet(props) {
  return React.createElement("li", null, props.name, " is a ", props.species, " and is ", props.age, " years old.");
}

function Footer() {
  return React.createElement("small", null, "Copyright Footer Text");
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());
  setTimeout(function () {
    setTheTime(new Date().toLocaleString());
  }, 1000);
  return React.createElement("p", null, "The current time is ", theTime);
}

function OurHeader() {
  return React.createElement("h1", { className: "special" }, "Our Amazing App Header");
}

ReactDOM.render(React.createElement(OurApp, null), document.querySelector("#app"));