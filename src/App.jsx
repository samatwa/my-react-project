import './App.css'

const App = () => {
  const handleClick = () => {
    alert("I'm a button!");
  };

  return <button onClick={handleClick}>Click me!</button>;
};

export default App
