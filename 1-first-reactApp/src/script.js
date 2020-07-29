function OurApp(){
  return React.createElement("div", null, [
    React.createElement("h1", null, "Our Amazing App Header"),
    React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`),
    React.createElement("small", null, "Cpyright Footer Text")
  ])
}

setInterval(() => ReactDOM.render(React.createElement(OurApp), document.querySelector('#app')),  1000)
