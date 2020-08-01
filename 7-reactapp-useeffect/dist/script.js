const useState = React.useState;
const useEffect = React.useEffect;

function OurApp() {
  const [pets, setPets] = useState([]);
  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")));
    }
  }, []);

  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets));
  }, [pets]);
  return (
    React.createElement(React.Fragment, null,
    React.createElement(OurHeader, null),
    React.createElement(LikeArea, null),
    React.createElement(TimeArea, null),
    React.createElement(AddPetForm, { setPets: setPets }),
    React.createElement("ul", null,
    pets.map(pet => React.createElement(Pet, { setPets: setPets, id: pet.id, name: pet.name, species: pet.species, age: pet.age, key: pet.id }))),

    React.createElement(Footer, null)));


}

function AddPetForm(props) {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(prev => prev.concat({ name, species, age, id: Date.now() }));
    setName('');
    setSpecies('');
    setAge('');
  }
  return (
    React.createElement("form", { onSubmit: handleSubmit },
    React.createElement("fieldset", null,
    React.createElement("legend", null, "Add New Pet"),
    React.createElement("input", { value: name, onChange: e => setName(e.target.value), placeholder: "Name" }),
    React.createElement("input", { value: species, onChange: e => setSpecies(e.target.value), placeholder: "species" }),
    React.createElement("input", { value: age, onChange: e => setAge(e.target.value), placeholder: "age in years" }),
    React.createElement("button", null, "Add Pet"))));



}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeHandler() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikeHandler() {
    setLikeCount(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  }
  return (
    React.createElement(React.Fragment, null,
    React.createElement("button", { onClick: increaseLikeHandler }, "Increase likes"),
    React.createElement("button", { onClick: decreaseLikeHandler }, "Decrease likes"),
    React.createElement("h2", null, "This page has been liked ", likeCount, " times")));


}

function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id != props.id));
  }
  return React.createElement("li", null, props.name, " is a ", props.species, " and is ", props.age, " years old.",
  React.createElement("button", { onClick: handleDelete }, "Delete"));

}

function Footer() {
  return React.createElement("small", null, "Copyright Footer Text");
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(interval);
  }, []);
  return React.createElement("p", null, "The current time is ", theTime);
}

function OurHeader() {
  return React.createElement("h1", { className: "special" }, "Our Amazing App Header");
}

ReactDOM.render(React.createElement(OurApp, null), document.querySelector("#app"));