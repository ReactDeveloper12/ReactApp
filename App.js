const Parent = React.createElement('div', { id: "Parent" }, [
    React.createElement(
        'div', { id: "child" }, [
        React.createElement('h1', {}, "This is a heading tag"),
        React.createElement('h2', {}, "This is a heading tag")
    ]),
    React.createElement(
        'div', { id: "child2" }, [
        React.createElement('h1', {}, "This is a heading tag1"),
        React.createElement('h2', {}, "This is a heading tag2")
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Parent)
console.log(Parent)