// Plik do zadania 2

function JSXRules(props) {
  return (
    <blockquote>
      {props.text}
    </blockquote>
  );
};

const FancyTable = ({n}) => {
  const listItems = Array.from({ length: n }, (_, index) => (
    <li key={index + 1}>{index + 1}</li>
    ));

  return <ul>{listItems}</ul>
}

function Multiple({ name, number }) {
  return (
    <>
      <h2>{name}</h2>
      <FancyTable n={number} />
    </>
  );
}

    
function Root(props) {
  return (
    <div>
  <JSXRules text="To jest cytat blokowy"/>
  <FancyTable n={5}/>
  <Multiple name="Nazwa" number={8}/>
</div>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

