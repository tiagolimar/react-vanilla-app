const {Card} = window.components;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Array.from({ length: 10 }, (_, i) => <Card key={i} id={i} />));