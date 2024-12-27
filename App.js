const parent = React.createElement("div",
    {id:"parent"},
    [
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading1"},"main Heading"),
        React.createElement("h2",{id:"heading2"},"Heading")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"heading1"},"main Heading"),
        React.createElement("h2",{id:"heading2"},"Heading")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

