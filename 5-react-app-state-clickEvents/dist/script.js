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
    React.createElement(LikeArea, null),
    React.createElement(TimeArea, null),
    React.createElement("ul", null,
    pets.map(pet => React.createElement(Pet, { name: pet.name, species: pet.species, age: pet.age, key: pet.id }))),

    React.createElement(Footer, null)));


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