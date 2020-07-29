function OurApp() {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "special" }, "Our Amazing App Header"),
    React.createElement("p", null, "The current time is ", new Date().toLocaleString(), "."),
    React.createElement("small", null, "Copyright Footer Text")));


}

setInterval(function () {
  ReactDOM.render(React.createElement(OurApp, null), document.querySelector("#app"));
}, 1000);