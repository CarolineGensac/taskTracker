import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";

import { getAllToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([]);

  
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

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
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              // updateMode={() => updateMode(item._id, item.text)}
              // deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}

          </div>

      </div>
      </div>
  );
}

export default App;
