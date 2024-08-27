import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">

    <div className="container">

      <h2>To Do List</h2>

      <div className="top">
          <input
            type="text"
            placeholder="What do you need to do ? "
          />

           <div
            className="add">    </div>
          </div>

          <div className="list">
        <ToDo text="Hi" />
          </div>

      </div>
      </div>
  );
}

export default App;
